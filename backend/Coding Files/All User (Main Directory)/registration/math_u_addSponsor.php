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
if (isset($_POST["company_name"])and $_POST["industry"] != "null" and isset($_POST["email"])){
	//-------------------------------//
	$co_name = $_POST["company_name"];
	$industry = $_POST["industry"];
	//------------------------------//
	//INSERT NEW COMPANY INTO THE DB & GET THE INSERT ID
	$email = $_POST["email"];
	$email = strtolower($email);
	$isUnique = isUniqueEmail($email,$mysqli);
	//--------------------------------------------------
	//------------------------//
	//CHECK EMAIL IS UNIQUE
	//-----------------------//
	if ($isUnique === TRUE){
		$company_id = addCompany($co_name, $industry, $mysqli);

		if ($company_id > 0){
		//-------------------
		//Super Admin Section
		//-------------------
			if (isset($_POST["fname"])and isset($_POST["lname"]) and isset($_POST["password"])){
				//------------------------//
				$f_name = $_POST["fname"];
				$l_name = $_POST["lname"];
				$pass = $_POST["password"];


				//INSERT INTO SPONSOR_USERS
				$hashed_password = GenerateHashPassword($pass);
				$spr_id = addSponsor($f_name, $l_name, $email,$hashed_password, $company_id, $mysqli);
				//--------------------------------------------------------------------
				if ($spr_id != 0){
					//GENERATE SPONSOR ID
					$new_id = GenerateUserID($spr_id,0);

					//UPDATE SPONSOR ID
					//--------------------------------------------------------
					if (UpdateSponsorID($new_id, $spr_id, $mysqli)===TRUE){

						//Add to All_USERS TABLE
						//-------------------------------------------------
						if (AddToUsers($email, $new_id, $mysqli)===TRUE){
							$message = array();
							$message["message"] = "Success!";
							echo json_encode($message);
						}
						else{
							$message["message"] = "Could not account add to all users";
		          echo json_encode($message);
						}
						//-------------------------------------------------
					}
					else {
						$message["message"] = "Could not update sponsor ID";
		        echo json_encode($message);
					}
					//---------------------------------------------------------

				}
				else{
					$message["message"] = "Could not Add Admin!";
	        echo json_encode($message);
				}
				//-------------------------------------------------------------------------
			}
			else{
				$message["message"] = "Please Provide the correct details for the Super Admin!";
				echo json_encode($message);
			}
		}
		else{
			$message["message"] = "Could not Insert New Company Try Again!";
			echo json_encode($message);
		}
	}
	else{
		$message["message"] = "Email not unique!";
		echo json_encode($message);
	}
}
else{
	$message["message"] = "Form is incomplete!";
	echo json_encode($message);
}

//==========================END===============================================//
//==============================
//List of functions
//==============================

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
