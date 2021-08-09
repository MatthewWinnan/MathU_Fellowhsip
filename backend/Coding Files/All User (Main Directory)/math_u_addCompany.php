<?php
//====================================
include 'math_u_db_connection.php';
include 'math_u_registration.php';

//====================================
//Tables Needed: all_users, company, sponsor_users, student
//Validate Emails for uniqueness 
//Hash All Passwords 
//Generate ID's for both types of users
//Insert into the DB
//==========================MAIN==============================================//
//---------------
//Company Section
//---------------
if (isset($_POST["company_name"])and $_POST["industry"] != "null"){
	//-------------------------------//
	$co_name = $_POST["company_name"];
	$industry = $_POST["industry"];
	//------------------------------//
	//INSERT NEW COMPANY INTO THE DB & GET THE INSERT ID
	$company_id = addCompany($co_name, $industry, $mysqli);
	
	if ($company_id > 0){
		//-------------------
		//Super Admin Section
		//-------------------
		if (isset($_POST["fname"])and isset($_POST["lname"]) and isset($_POST["email"]) and isset($_POST["password"])){
			//------------------------//
			$f_name = $_POST["fname"];
			$l_name = $_POST["lname"];
			$email = $_POST["email"];
			$email = strtolower($email);
			$pass = $_POST["password"];
			//------------------------//
			//CHECK EMAIL IS UNIQUE
			$isUnique = isUniqueEmail($email,$mysqli);
			if ($isUnique === TRUE){
				//INSERT INTO SPONSOR_USERS 
				$hashed_password = GenerateHashPassword($pass);
				$spr_id = addSponsor($f_name, $l_name, $email,$hashed_password, $company_id, $mysqli);
				//--------------------------------------------------------------------
				if ($spr_id != 0){
					//GENERATE SPONSOR ID 
					$new_id = GenerateUserID($spr_id,0);
					
					//UPDATE SPONSOR ID 
					//--------------------------------------------------------
					if (UpdateID($new_id, $spr_id, $mysqli)===TRUE){
						
						//Add to All_USERS TABLE
						//-------------------------------------------------
						if (AddToUsers($email, $new_id, $mysqli)===TRUE){
							echo "<h1>Success! New Admin Inserted. </h1>";
							echo json_encode(display($spr_id, $mysqli));
						}
						else{
							echo "Could not add Account to AllUsers";
						}
						//-------------------------------------------------
					}
					else {
						echo "Could not update sponsor ID!";
					}
					//---------------------------------------------------------
					
				}
				else{
					echo "Could not Add Admin!";
				}
				//-------------------------------------------------------------------------
			}
			else{
				echo "Email not unique!";
			}		
		}
		else{
			echo "Please Provide the correct details for the Super Admin!";
		}
		
	}
	else{
		echo "Could not Insert New Company Try Again!";
	}

}
else{
	echo "Form is incomplete!";
}

//==========================END===============================================//
//==============================
//List of functions
//==============================

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
function UpdateID($s_id, int $id, $mysqli){
	$sql = "UPDATE sponsor_users SET sponsor_id='$s_id' WHERE id=$id";
	if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

//-----------------------------------------
//function that displays the data as an obj
//-----------------------------------------
function display(int $id, $mysqli){
	$sql = "SELECT * FROM sponsor_users WHERE id =$id";
	$result = $mysqli->query($sql);
	
	if ($result->num_rows>0){
		$row = $result->fetch_assoc();
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
	else return null;
}
?>
