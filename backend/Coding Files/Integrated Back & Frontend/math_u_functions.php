<?php
include_once 'all_classes.php';

//=================================================
//function to QueryStudents, returns a ID
//================================================
function QueryStudents($email, $mysqli){
	
	$email = strtolower($email);
	$sql = "SELECT * FROM student WHERE Email_address = '".$email."'";
	$result = $mysqli->query($sql);
	return $result;
}

//=================================================
//function to QuerySponsors, returns a ID
//================================================
function QuerySponsors($email, $mysqli){
	 
	$email = strtolower($email);
	$sql = "SELECT * FROM sponsor_users WHERE email_address = '".$email."'";
	$result = $mysqli->query($sql);
	return $result;
}

//-----------------------------------------
function UpdateStudentID($s_id, int $id, $mysqli){
//-----------------------------------------
	$sql = "UPDATE student  SET Student_ID='$s_id' WHERE id=$id";
	if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
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
		$user = new all_users();
		echo json_encode($user);
	}
}

?>