<?php
//====================================
include 'math_u_db_connection.php';
include 'math_u_registration_functions.php';
include_once 'all_classes.php';

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
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (isset($data["company"]["company_name"])and isset($data["company"]["company_industry"]) and isset($data["email_address"])){
	//-------------------------------//
	$co_name = $data["company"]["company_name"];
	$industry = $data["company"]["company_industry"];
	//------------------------------//
	//INSERT NEW COMPANY INTO THE DB & GET THE INSERT ID
	$email = $data["email_address"];
	$email = strtolower($email);
	$isUnique = isUniqueEmail($email,$mysqli);
	//--------------------------------------------------
	$new_user = new all_users();
	//------------------------//
	//CHECK EMAIL IS UNIQUE
	//-----------------------//
	if ($isUnique === TRUE){
		$company_id = addCompany($co_name, $industry, $mysqli);

		if ($company_id > 0){
		//-------------------
		//Super Admin Section
		//-------------------
			if (isset($data["first_name_of_user"])and isset($data["last_name_of_user"]) and isset($data["password"])){
				//------------------------//
				$f_name = $data["first_name_of_user"];
				$l_name = $data["last_name_of_user"];
				$pass = $data["password"];


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
							$new_user->message= "Success! Check your email for the activation email.";
							echo json_encode($new_user);
						}
						else{
							$new_user->message = "Could not account add to all users";
		          echo json_encode($new_user);
						}
						//-------------------------------------------------
					}
					else {
						$new_user->message= "Could not update sponsor ID";
		        echo json_encode($new_user);
					}
					//---------------------------------------------------------

				}
				else{
					$new_user->message = "Could not Add Admin!";
	        echo json_encode($new_user);
				}
				//-------------------------------------------------------------------------
			}
			else{
				$new_user->message = "Please Provide the correct details for the Super Admin!";
				echo json_encode($new_user);
			}
		}
		else{
			$new_user->message = "Could not Insert New Company Try Again!";
			echo json_encode($new_user);
		}
	}
	else{
		$new_user->message = "Email not unique!";
		echo json_encode($new_user);
	}
}
else{
	$new_user->message = "Form is incomplete!";
	echo json_encode($new_user);
}

//==========================END===============================================//
//==============================
//List of functions
//==============================
?>
