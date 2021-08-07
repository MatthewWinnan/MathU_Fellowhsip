<?php
//Requirements for logging in
//Required Data: Email & Password
//Tables: 3 (All_Users, Sponsor_Users, Students)
//Link: Student_ID & Email & Sponsor_ID

//include connection
include 'math_u_db_connection.php';
require 'hash_password.php';
//end of include connection

//---------------------------------------START MAIN ---------------------------------------------//
if (isset($_POST["email"])and isset($_POST["password"])){//Ensure that received data is not empty
//===========================================================
//query email -> echo error if no match found -> All_Users
$usrID = QueryAllUsers($_POST["email"],$mysqli);
//===========================================================
//Decode the UserID -> Student:U , Sponsor: S (Parameter User_ID )

if ($usrID != ""){
	$tblName = DecodeID($usrID);
//===========================================================
//Query Sponsor_Users / Query Students Table to get password

	if ($tblName == "sponsor_users"){
		$spr = QuerySponsors($_POST["email"], $mysqli);
		//Validate $spr not null
		//===========================================================

		//Compare Passwords
		if ($spr->num_rows > 0){
			$flag_bit = 1;
			$results = ComparePasswords($_POST["password"], $spr->fetch_assoc(), $flag_bit);

			//===========================================================
			//Go to Homepage if match found
			Display($results);
			//===========================================================
		}
		else{
			echo "Your password is incorrect!";
		}

	}
	else{
		$std = QueryStudents($_POST["email"],$mysqli);
		//Validate $spr not null
		//===========================================================

		//Compare Passwords
		if ($std->num_rows > 0){
			$flag_bit = 0;
			$results = ComparePasswords($_POST["password"], $std->fetch_assoc(), $flag_bit);

			//===========================================================
			//Go to Homepage if match found
			Display($results);
			//===========================================================
		}
		else{
			echo "Your password is incorrect!";
		}
	}
}
else{
	echo "Your profile does not exist, please sign up.";
}

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
//function to QuerySponsors, returns a row
//================================================
function QuerySponsors($email, $mysqli){
	//returns a row
	$email = strtolower($email);
	$sql = "SELECT * FROM sponsor_users WHERE email_address = '".$email."'";
	$result = $mysqli->query($sql);

	return $result;
}

//=================================================
//function to QueryStudents, returns a row
//================================================
function QueryStudents($email, $mysqli){
	//returns a row ->
	$email = strtolower($email);
	//echo 'Email: '.$email;
	$sql = "SELECT * FROM student WHERE Email_address = '".$email."'";
	$result = $mysqli->query($sql);
	//echo json_encode($result);
	return $result;
}

//=================================================
//function to Dehash & Compare Password, returns an array of data (accepts an array)
//================================================
function ComparePasswords($password, $row,int $flag){
	//returns an array

	if (password_verify($password,$row["password"])){
		if ($flag == 1){
			echo "<h1>Employee Details</h1>";
			$Obj=new \stdClass();
			$Obj->name = $row["first_name_of_user"];
			$Obj->surname = $row["last_name_of_user"];
			$Obj->email = $row["email_address"];
			$Obj->company_id = $row["company_id"];
			$Obj->isSuperAdmin = $row["isSuperAdmin"];
			$Obj->manageBursaries = $row["manageBursaries"];
			$Obj->manageApplications = $row["manageApplications"];
			$Obj->inactive = $row["inactive"];
			$Obj->isVerified = $row["isVerified"];
			return $Obj;
		}
		else{
			echo "<h1>Student Details</h1>";
			$Obj = new \stdClass();
			$Obj->name = $row["First_name"];
			$Obj->surname = $row["Last_name"];
			$Obj->email = $row["Email_address"];
			$Obj->dob = $row["Date_of_birth"];
			$Obj->validated = $row["Validated"];
			$Obj->nationality = $row["Nationality"];
			$Obj->contact_number = $row["Contact_number"];
			$Obj->city = $row["City"];
			$Obj->province = $row["Province"];
			$Obj->disability = $row["Disability"];
			$Obj->academic_Level = $row["Current_academic_level"];
			$Obj->average = $row["Average"];
			$Obj->website = $row["Website"];
			return $Obj;

		}

	}
	else{
		$Obj = null;
		return $Obj;
	}

}

//=================================================
//function this function echo results in JSON format
//================================================
function Display($result){
	//Check results is not an empty array
	if ($result != null){
		echo json_encode($result);
	}
	else{
	  echo <<<HTML
		<script>
		    function pageRedirect() {
		        window.location.replace("https://localhost/MathU_Fellowhsip/backend/Coding%20files/db_input_test.html");
		    }
		    setTimeout("pageRedirect()", 2000);
		</script>
		<p>Your password is incorrect. You will be redirected to the login page in 2 sec.</p>
HTML;
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

//===================================================
//Redirect function
//===================================================

?>
