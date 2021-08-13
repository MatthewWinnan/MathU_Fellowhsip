<?php
//===================================================================================================================
require 'hash_password.php';
//========================================
//Requirements for signing up all users
//========================================
//Note 3 different files are going to be used
//Registration (For All Common functions), db_addCompany (Add Employees & Company), db_addStudent (Student Addition)
//Tables Needed: all_users, company, sponsor_users, student
//Validate Emails for uniqueness
//Hash All Passwords
//Generate ID's for both types of users
//Insert into the DB
//======================================================================================================================

//============================
//List of functions
//============================

//=========================START OF COMMON FUNCTIONS==========================//

//-----------------------------------------------------------------------------------------
//function used to check if the provided email is unique (queryAllUsers) returns true/false
//-----------------------------------------------------------------------------------------
function isUniqueEmail($email,$mysqli){
	$sql = "SELECT * FROM all_users WHERE Email_address='$email'";
	$result = $mysqli->query($sql);
	if ($result->num_rows>0){
		return false;
	}
	else return true;
}

//-------------------------------------------------------------------
//function Hashes the user's password and returns the hashed password
//-------------------------------------------------------------------
function GenerateHashPassword($pass){
	return password_hash($pass, PASSWORD_DEFAULT);
}

//-----------------------------------------------------------------
//function used to generate user's ids and returns a new string id
//-----------------------------------------------------------------
function GenerateUserID(int $autoID, int $flag){
	if ($flag == 0){
		if ($autoID < 10){
			$Spr_id = "S00".$autoID;
			return $Spr_id;
		}
		else if($autoID < 100){
			$Spr_id = "S0".$autoID;
			return $Spr_id;
		}
		else{
			$Spr_id = "S".$autoID;
			return $Spr_id;
		}
	}
	else{
		if ($autoID < 10){
			$Spr_id = "U00".$autoID;
			return $Spr_id;
		}
		else if($autoID < 100){
			$Spr_id = "U0".$autoID;
			return $Spr_id;
		}
		else{
			$Spr_id = "U".$autoID;
			return $Spr_id;
		}
	}
}

//-------------------------------------------------------------------
//function to insert new users into the user's table (Void function)
//-------------------------------------------------------------------
function AddToUsers($email, $usrID, $mysqli){
	$sql = "Insert Into all_users (User_ID, Email_address) values ('$usrID', '$email')";

	if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

//==========================END OF COMMON FUNCTIONS===========================//

//=================================STUDENTS===================================//

//---------------------------------------------------------------------------------------
//This function inserts a new student into the student table and returns ID of Insertion
//---------------------------------------------------------------------------------------

function AddStudent($first_name, $last_name, $email, $hashed_pass, $mysqli){

  $date = date("Y-m-d");
  $sql = "INSERT INTO student (First_name, Last_name, Email_address, Password, Registerred_date, Validated, Banned, Number_of_reports) VALUES ('$first_name', '$last_name','$email', '$hashed_pass', '$date', FALSE, FALSE, '0')";

  if($mysqli->query($sql) === TRUE){
    return $mysqli->insert_id;
  }
  else{
    return 0;
  }
}

//-------------------------------------------------------------------------
//function to update the student_id of the new student (return a boolean)
//-------------------------------------------------------------------------

function UpdateStudentID($student_id, $u_id, $mysqli){

  $sql = "UPDATE student SET Student_ID = '$u_id' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

//===============================SPONSORS=====================================//

//---------------------------------------------------------------------------------------
//This function inserts a new company into the Company Table and returns ID of Insertion
//---------------------------------------------------------------------------------------
function addCompany($comp_name, $indtry, $mysqli){
	//Additions: Date Created
	$date = date("Y-m-d");
	$sql = "Insert Into company (company_name, company_industry, date_created) values ('$comp_name', '$indtry', '$date')";

	if($mysqli->query($sql)=== TRUE){
		return $mysqli->insert_id;
	}
	else{
		return 0;
	}
}

//-----------------------------------------------------------------------------------
//This function inserts new data into the sponsor_user's table and returns insert id
//-----------------------------------------------------------------------------------
function addSponsor($fname, $lname, $email,$hashed_pass, int $company_id, $mysqli){
	$date = date("Y-m-d");
	$sql = "Insert Into sponsor_users (first_name_of_user, last_name_of_user, email_address, password, company_id, isSuperAdmin, manageBursaries, manageApplications, inactive, isVerified, regisered_date) values ('$fname', '$lname', '$email', '$hashed_pass',$company_id, TRUE, TRUE, TRUE, FALSE, FALSE,'$date')";

	if($mysqli->query($sql)=== TRUE){
		return $mysqli->insert_id;
	}
	else{
		echo $mysqli->error;
		return 0;
	}

}

//-------------------------------------------------------------------------
//function to update the sponsor_id of the new SuperAdmin (return a boolean)
//-------------------------------------------------------------------------
function UpdateSponsorID($s_id, int $id, $mysqli){
	$sql = "UPDATE sponsor_users SET sponsor_id='$s_id' WHERE id=$id";
	if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
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
		echo "No Results Found";
	}
}

 ?>
