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

$email = $data['email_address'];
$company_id = $data['company_id'];
$isSuperAdmin = $data['isSuperAdmin'];
$manageBursaries = $data['manageBursaries'];
$manageApplications = $data['manageApplications'];

// Update database.

$ci = companyIDInEmployee($email,$company_id,$mysqli);

if( $ci == true){

if($isSuperAdmin === 'true' AND $manageApplications === 'true' AND $manageBursaries === 'true'){

$sql = "UPDATE `sponsor_users` SET `isSuperAdmin`= 1, `manageBursaries`= 1, `manageApplications`= 1
        WHERE `email_address`='$email' AND `company_id`='$company_id' ";
$entry = $mysqli->query($sql);

} elseif ($manageBursaries === 'true' AND $manageApplications === 'false' AND $isSuperAdmin === 'false'){

$sql = "UPDATE `sponsor_users` SET `isSuperAdmin`= 0, `manageBursaries`= 1, `manageApplications`= 0
        WHERE `email_address`='$email' AND `company_id`='$company_id' ";
$entry = $mysqli->query($sql);

} elseif ($manageBursaries === 'false' AND $manageApplications === 'true' AND $isSuperAdmin === 'false'){

$sql = "UPDATE `sponsor_users` SET `isSuperAdmin`= 0, `manageBursaries`= 0, `manageApplications`= 1
        WHERE `email_address`='$email' AND `company_id`='$company_id' ";
$entry = $mysqli->query($sql);


} else {

  $sql = "UPDATE `sponsor_users` SET `isSuperAdmin`= 0, `manageBursaries`= 1, `manageApplications`= 1
  WHERE `email_address`='$email' AND `company_id`='$company_id' ";
  $entry = $mysqli->query($sql);

}

if($entry){

  $updateRole->message = "Role Updated.";

  echo json_encode($updateRole);

  // return json_encode($updateRole);

} else {

  $updateRole->message = "Failed updating employee role.";

  echo json_encode($updateRole);

  // return json_encode($updateRole);
}} else {
   $updateRole = new Role();
   $updateRole->message = "Company ID or Email does not exist OR credentials do not match";

   // echo $mysqli->errno;

   echo json_encode($updateRole);

   return json_encode($updateRole);
 }

 ?>
