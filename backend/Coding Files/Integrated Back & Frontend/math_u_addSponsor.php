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
//Input Management

$input = file_get_contents('php://input');
$data = json_decode($input, true);

//---------------
//Company Section
//---------------


if (isset($data['company_name'])and $data['company_industry'] != "null" and isset($data["email"])){
	//-------------------------------//
	$co_name = $data['company_name'];
	$industry = $data['company_industry'];
	//------------------------------//
	//INSERT NEW COMPANY INTO THE DB & GET THE INSERT ID
	$email = $data['email_address'];
	$email = strtolower($email);
	$isUnique = isUniqueEmail($email,$mysqli);
	//---------------------------------------------------
	//------------------------//
	//CHECK EMAIL IS UNIQUE
	//------------------------//
	if ($isUnique === TRUE){
		$company_id = addCompany($co_name, $industry, $mysqli);
		
		if ($company_id > 0){
			//-------------------
			//Super Admin Section
			//-------------------
			if (isset($data['f_name'])and isset($data['l_name']) and isset($data['password'])){
				//------------------------//
				$f_name = $data['f_name'];
				$l_name = $data['l_name'];
				$pass = $data['password'];

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
				echo "Please Provide the correct details for the Super Admin!";
			}
		
		}
		else{
			echo "Could not Insert New Company Try Again!";
		}
	}
	else{
		echo "Email not unique!";
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
		http_response_code(201);
		return $mysqli->insert_id;
	}
	else{
		http_response_code(422);
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
		http_response_code(201);
		return $mysqli->insert_id;
	}
	else{
		http_response_code(422);
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
		http_response_code(201);
		return true;
	}
	else{
		http_response_code(422);
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
		http_response_code(201);
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
	else{
		http_response_code(422);
		return null;
	} 
}
?>
