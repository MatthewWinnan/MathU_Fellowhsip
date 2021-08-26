<?php

// Connection

include 'math_u_db_connection.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$email = $data['email_address'];
$company_id = $data['company_id'];
$isSuperAdmin = $data['isSuperAdmin'];
$manageBursaries = $data['manageBursaries'];
$manageApplications = $data['manageApplications'];

class Role{
  public $message;
}

$updateRole = new Role();

// $sponsor_id = ucfirst($data['sponsor_id']);


// Update database.

if(isset($email)){

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
}
} else {
  $updateRole->message = "Email does not exist.";

  echo json_encode($updateRole);
}

 ?>
