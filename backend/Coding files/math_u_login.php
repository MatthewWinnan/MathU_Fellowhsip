<?php
//Requirements for logging in
//Required Data: Email & Password
//Tables: 3 (All_Users, Sponsor_Users, Students)
//Link: Student_ID & Email & Sponsor_ID

//include connection

//---------------------------------------START MAIN ---------------------------------------------//
if (isset($_POST["email"])and isset($_POST["password"])){//Ensure that received data is not empty
//===========================================================
//query email -> echo error if no match found -> All_Users
$usrID = QueryAllUsers($_POST["email"], $_POST["password"]);
//===========================================================
//Decode the UserID -> Student:U , Sponsor: S (Parameter User_ID )
$tblName = DecodeID($usrID);
//===========================================================
//Query Sponsor_Users / Query Students Table to get password
if ($tblName = "sponsor_users"){
	$spr = QuerySponsors($_POST["email"]);
	//Validate $spr not null
	//===========================================================
	//Compare Passwords -> echo error if no match found
	$results = ComparePasswords($_POST["password"], $spr);
	//Check results is not an empty array
	//===========================================================
	//Go to Homepage if match found
	Display($results);
	//===========================================================
}
else{
	$std = QueryStudents($_POST["email"]);
	//Validate $spr not null
	//===========================================================
	//Compare Passwords -> echo error if no match found
	$results = ComparePasswords($_POST["password"], $std);
	//Check results is not an empty array
	//===========================================================
	//Go to Homepage if match found
	Display($results);
	//===========================================================
}

}
//--------------------------------------END MAIN---------------------------------------------//
//===================
//LIST OF FUNCTIONS
//===================

//==============================================
//function to query all Users(returns the ID of )
//===============================================
function QueryAllUsers($email, $pass){
	//return data of user_id

}

//===============================================
//function to decode the UserID
//===============================================
function DecodeID($id){
	$firstchar = $id[0];
	if ($firstchar = 'S'){
		$tblName = "sponsor_users";
		//return table that should be searched
	}
	else {
		$tblName = "students";
		//return table that should be searched
	}
}

//=================================================
//function to QuerySponsors, returns a row
//================================================
function QuerySponsors($email){
	//returns a row
	$sql = "SELECT * FROM Sponsor_Users WHERE Email_address = "$email";"
}

//=================================================
//function to QueryStudents, returns a row
//================================================
function QueryStudents($email){
	//returns a row
}

//=================================================
//function to Dehash & Compare Password, returns an array of data (accepts an array)
//================================================
function ComparePasswords($password, $row){
	//returns an array
}

//=================================================
//function this function echo results in JSON format
//================================================
function Display($result){
	echo json_encode($result);
}
?>
