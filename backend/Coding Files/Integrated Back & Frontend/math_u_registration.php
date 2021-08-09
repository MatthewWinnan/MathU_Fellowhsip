<?php
//===================================================================================================================
require 'hash_password.php';
//========================================
//Requirements for signing up sponsors
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

//-----------------------------------------------------------------------------------------
//function used to check if the provided email is unique (queryAllUsers) returns true/false
//-----------------------------------------------------------------------------------------
function isUniqueEmail($email,$mysqli){
	$sql = "SELECT * FROM all_users WHERE Email_address='$email'";
	$result = $mysqli->query($sql);
	if ($result->num_rows>0){
		http_response_code(201);
		return false;
	}
	else{
		http_response_code(422);
		return true;
	}
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
		http_response_code(201);
		return true;
	}
	else{
		http_response_code(422);
		return false;
	}
}

?>