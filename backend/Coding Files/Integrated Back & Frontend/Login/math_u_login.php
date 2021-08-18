<?php
//Requirements for logging in
//Required Data: Email & Password 
//Tables: 3 (All_Users, Sponsor_Users, Students)
//Link: Student_ID & Email & Sponsor_ID

//include connection 
include 'math_u_db_connection.php';
include 'math_u_functions.php';
include_once 'all_classes.php';
require 'hash_password.php';
//INPUT MANAGEMENT
$input = file_get_contents('php://input');
$data = json_decode($input, true);

//---------------------------------------START MAIN ---------------------------------------------//
//===========================================================
$email = $data['email_address'];
$password = $data['password'];

//===========================================================
//query email -> echo error if no match found -> All_Users
$usrID = QueryAllUsers($email,$mysqli);
//===========================================================
//Decode the UserID -> Student:U , Sponsor: S (Parameter User_ID )

if ($usrID != ""){
	$tblName = DecodeID($usrID);
//===========================================================
//Query Sponsor_Users / Query Students Table to get password

	if ($tblName == "sponsor_users"){
		$spr = QuerySponsors($email, $mysqli);
		//Validate $spr not null
		//===========================================================
		
		//Compare Passwords 
		if ($spr->num_rows > 0){
			$flag_bit = 1;

            //-----------------Check if sponsor is verified-------------------------
            $query1 = "SELECT * FROM sponsor_users WHERE Email_address='".$email."'";
            $result = $mysqli->query($query1); 
            $row1 = $result->fetch_assoc();
            $isVerified = $row1['isVerified'];
            //-----------------------------------------------------------------------
            $query2 = "SELECT * FROM sponsor_users WHERE Email_address='".$email."'";
            $result = $mysqli->query($query2); 
            $row2 = $result->fetch_assoc();
            $inactive = $row2['inactive'];
            //-----------------------------------------------------------------------
            if($isVerified == 1){
                Display($isVerified);

                if($inactive ==1){
                    Display($results);
                    
                } else {
                    $user = new all_users();
                    $user->message= "Account is Inactive";                  
                }
                
            } else {
				$user = new all_users();
				$user->message= "Account is not Verified";
            }
			

            //-----------------------Check if sponsor is verified END--------------------------

			$results = ComparePasswords($password, $spr->fetch_assoc(), $flag_bit, $mysqli);
			
			//===========================================================
			//Go to Homepage if match found
			if ($results != null){
				Display($results);
			}
			else{
				$user = new all_users();
				$user->message= "Password is Incorrect!";
				Display($user);
			}
			
			//===========================================================
		}
		else{
			//return empty object 
			$user = new all_users();
			$user->message= "Password is Incorrect!";
			Display($user);
			
		}
		
	}
	else{
		$std = QueryStudents($email,$mysqli);
		//Validate $spr not null
		//===========================================================
		
		//Compare Passwords 
		if ($std->num_rows > 0){
			$flag_bit = 0;
			$results = ComparePasswords($password, $std->fetch_assoc(), $flag_bit, $mysqli);
		
			//===========================================================
			//Go to Homepage if match found 
			if ($results != null){
				Display($results);
			}
			else{
				$user = new all_users();
				$user->message= "Password is Incorrect!";
				Display($user);
			}
			//===========================================================
		}
		else{
			//empty Object
			$user = new all_users();
			$user->message= "Password is Incorrect!";
			Display($user);
		}
	}
}
else{
	//empty Object
	$user = new all_users();
	$user->message= "Email Address does not exist!";
    Display($user);
}


//--------------------------------------END MAIN---------------------------------------------//
//===================
//LIST OF FUNCTIONS 
//===================

//==============================================
//function to query all Users(returns the ID of )
//===============================================
function QueryAllUsers($email,$mysqli){
	//return data of user_id
	//echo $email;
	//echo '<br>';
	$email = strtolower($email);
	$query = "SELECT * FROM all_users WHERE Email_address='".$email."'";
	$result = $mysqli->query($query);
	
	if ($result->num_rows > 0){
		$row = $result->fetch_assoc();
		//echo $row["User_ID"];
		//echo '<br>';
		return $row["User_ID"];
	}
	else{
		return "";
	}
}

//===============================================
//function to decode the UserID
//===============================================
function DecodeID($id){
	$firstchar = $id[0];
	//echo $firstchar;
	//echo '<br>';
	if ($firstchar =='S'){
		$tblName = "sponsor_users";
		//return table that should be searched
		return $tblName;
	}
	else {
		$tblName = "students";
		//return table that should be searched
		return $tblName;
	}
}

//=================================================
//function to Dehash & Compare Password, returns an array of data (accepts an array)
//================================================
function ComparePasswords($password, $row,int $flag,$mysqli){
	//returns an array 
	
	if (password_verify($password,$row["password"])){
		$date = date("Y-m-d");
		
		if ($flag == 1){
			$sql = "UPDATE sponsor_users SET last_login='".$date."' WHERE email_address='".$row["email_address"]."'";
			
			if($mysqli->query($sql)){
				//create object to send to the frontend
				$user = new all_users();
				$user->Sponsor = new sponsor_users($row["id"], $row["first_name_of_user"],$row["last_name_of_user"], $row["email_address"],  $row["company_id"], $row["isSuperAdmin"], $row["manageBursaries"], $row["manageApplications"], $row["inactive"], $row["isVerified"]);
				return $user;
				
			}
			else{
				//update error message and send empty obj
				return null;
			}
		}
		else{
			$sql = "UPDATE student SET Last_login='".$date."' WHERE Email_address='".$row["Email_address"]."'";
			
			if($mysqli->query($sql)){
				//create object to send to the frontend
				$user = new all_users();
				$user->Student = new student($row["ID"], $row["First_name"], $row["Last_name"], $row["Date_of_birth"], $row["Email_address"], $row["Validated"], $row["Nationality"], $row["Contact_number"], $row["City"], $row["Province"], $row["Disability"], $row["Current_academic_level"], $row["Grade"], $row["Syllabus"], $row["Average"], $row["Currently_studying"], $row["Year_of_study"], $row["Study_institution"], $row["Continue_studies"], $row["GPA"], $row["Description_of_student"], $row["Bursarred"], $row["Current_bursaries"], $row["Workback"], $row["Website"], $row["Number_of_reports"],$row["Banned"]);
				return $user;
			}
			else{
				//update error message send empty obj
				return null;
			}
			
		}
		
	}
	else{
		//return empty oBJ
		return null;
	}
	
}
//===================================================
//Creating a Session (Void function) 
//===================================================
function CreateSession($row){//gets an array to create a session 
	
}

//===================================================
//Cookie Creation (Void)
//===================================================
function CreateCookies($row){//gets an array to create a session 
	
}
?>