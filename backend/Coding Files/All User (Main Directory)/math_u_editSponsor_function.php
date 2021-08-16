<?php
//======================================================================================
//This file is a collection all functions needed to edit Employees, Company details and manage bursaries and applicants
//======================================================================================

//==================
//LIST OF FUNCTIONS
//==================

//-----------------
// Company Section
//-----------------
//==========================================
function UpdateLogo($file,int $id, $mysqli){
	//Delete previous post

}
//=========================================
function UpdateURL($url, int $id, $mysqli){
	$sql = "UPDATE company SET company_URL= '$url' WHERE company_id=$id";
	if ($mysqli->query($sql)=== TRUE){
		return true;
	}
	else return false;
}
//=================================================
function UpdateDescription($des, int $id, $mysqli){
	$sql = "UPDATE company SET company_description= '$des' WHERE company_id=$id";
	if ($mysqli->query($sql)=== TRUE){
		return true;
	}
	else return false;
}

//--------------------------
//Employee Side
//--------------------------
//==========================================
function GetEmployee(int $comp_id, $mysqli){

}
//================================================
function DeactivateEmployee(int $usr_ID, $mysqli){
	$sql = "UPDATE sponsor_users SET inactive= TRUE WHERE id=$usr_ID";
	if ($mysqli->query($sql)=== TRUE){
		return true;
	}
	else return false;
}

//=========================================
function ActivateEmployee($usr_ID, $mysqli){
	$sql = "UPDATE sponsor_users SET inactive= FALSE WHERE id=$usr_ID";
	if ($mysqli->query($sql)=== TRUE){
		return true;
	}
	else return false;
}

//===========================================================
function UpdateRole(int $usrID, $role, bool $update, $mysqli){
	$sql = "UPDATE sponsor_users SET $role= $update WHERE id=$usr_ID";
	if ($mysqli->query($sql)=== TRUE){
		return true;
	}
	else return false;
}
//--------------------------
//Applicants
//--------------------------
//===========================================
function GetApplicants(int $bur_id, $mysqli){
	$sql = "SELECT id, firstname, lastname FROM MyGuests WHERE lastname='Doe'";
	$result = $mysqli->query($sql);

	if ($result->num_rows > 0) {
	  // output data of each row
	  while($row = $result->fetch_assoc()) {
		echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
	  }
	} else {
	  echo "0 results";
	}
}
//===================================
function ShortList(int $id, $mysqli){
	$sql = "UPDATE student_bursary SET ShortListed = TRUE WHERE Student_ID=$id";
	if ($mysqli->query($sql)=== TRUE){
		return true;
	}
	else return false;
}
//======================================
function DenyApplicant(int $id, $mysqli){
	$sql = "UPDATE student_bursary SET Status = 'Declined' WHERE Student_ID=$id";
	if ($mysqli->query($sql)=== TRUE){
		return true;
	}
	else return false;

}
//=========================================
function AcceptApplicant(int $id, $mysqli){
	$sql = "UPDATE student_bursary SET Status = 'Accepted' WHERE Student_ID=$id";
	if ($mysqli->query($sql)=== TRUE){
		return true;
	}
	else return false;

}

?>
