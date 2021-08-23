<?php

// Connection

include 'math_u_db_connection.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

class Role{
  public $message;
}

$updateRole = new Role();

$sponsor_id = ucfirst($data['sponsor_id']);
$company_id = $data['company_id'];
$isSuperAdmin = $data['isSuperAdmin'];
$manageBursaries = $data['manageBursaries'];
$manageApplications = $data['manageApplications'];

// Update database.

if($isSuperAdmin === 'true'){

$sql = "UPDATE `sponsor_users` SET `isSuperAdmin`= 1, `manageBursaries`= 1, `manageApplications`= 1
        WHERE `sponsor_id`='$sponsor_id' AND `company_id`='$company_id' ";
$entry = $mysqli->query($sql);

} elseif ($manageBursaries === 'true' AND $manageApplications === 'false' AND $isSuperAdmin === 'false'){

$sql = "UPDATE `sponsor_users` SET `isSuperAdmin`= 0, `manageBursaries`= 1, `manageApplications`= 0
        WHERE `sponsor_id`='$sponsor_id' AND `company_id`='$company_id' ";
$entry = $mysqli->query($sql);

} elseif ($manageBursaries === 'false' AND $manageApplications === 'true' AND $isSuperAdmin === 'false'){

$sql = "UPDATE `sponsor_users` SET `isSuperAdmin`= 0, `manageBursaries`= 0, `manageApplications`= 1
        WHERE `sponsor_id`='$sponsor_id' AND `company_id`='$company_id' ";
$entry = $mysqli->query($sql);


} else {

  $sql = "UPDATE `sponsor_users` SET `isSuperAdmin`= 0, `manageBursaries`= 1, `manageApplications`= 1
  WHERE `sponsor_id`='$sponsor_id' AND `company_id`='$company_id' ";
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

 ?>
