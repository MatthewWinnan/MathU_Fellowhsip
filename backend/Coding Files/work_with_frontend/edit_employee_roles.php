<?php

// Connection
include 'math_u_db_connection.php';
include 'math_u_addEmployee_functions.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

class Role{
  public $message;
}

$updateRole = new Role();

// $sponsor_id = ucfirst($data['sponsor_id']);
$email = $data['email_address'];
$company_id = $data['company_id'];

$ci = companyIDInEmployee($email,$company_id,$mysqli);

if( $ci == true){
	if ($data["isSuperAdmin"]==true){
		$isSuperAdmin = 1;//(boolean)
	}
	else $isSuperAdmin = 0;

	if ($data["manageBursaries"]==true){
		$manageBursaries = 1;//(boolean)
	}
	else $manageBursaries = 0;

	if ($data["manageApplications"]==true){
		$manageApplications = 1;//(boolean)
	}
	else $manageApplications = 0;

	$sql = "UPDATE `sponsor_users` SET `isSuperAdmin`= '$isSuperAdmin', `manageBursaries`= '$manageBursaries', `manageApplications`= '$manageApplications' WHERE `email_address`='$email' AND `company_id`='$company_id' ";
	$entry = mysqli_query($mysqli, $sql);

	//echo $sql;
	//echo $entry;

	if($entry){
	  $updateRole->message = "Success!";
	  echo json_encode($updateRole);
	  // return json_encode($updateRole);
	} 
	else {
	  $updateRole->message = "Failed updating employee role.";
	  echo json_encode($updateRole);
	  // return json_encode($updateRole);
	}
} else {
   $updateRole = new Role();
   $updateRole->message = "Failed updating employee role.";

   echo json_encode($updateRole);

 }

 ?>
