<?php

include 'math_u_db_connection.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$sponsor_id = $data['sponsor_id'];
$company_id = $data['company_id'];
$email = $data['email_address'];

class deactivateEmployee{
  public $message;
}

$sql = "UPDATE `sponsor_users` SET `inactive`= 1
        WHERE `sponsor_id`='$sponsor_id' AND `company_id`='$company_id' AND 'email_address' = '$email' ";
$entry = $mysqli->query($sql);

if($entry){
  $deactivate = new deactivateEmployee();
  $deactivate->message = "Employee Deactivated";

  echo json_encode($deactivate);

  // return json_encode($deactivate);

} else {
  $deactivate = new deactivateEmployee();
  $deactivate->message = "Failed to deactivate employee.";

  // echo $mysqli->errno;

  echo json_encode($deactivate);

  // return json_encode($deactivate);
}


 ?>
