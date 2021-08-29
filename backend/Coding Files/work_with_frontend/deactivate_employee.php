<?php

include 'math_u_db_connection.php';
include 'math_u_addEmployee_functions.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$company_id = $data['company_id'];
$email = $data['email_address'];

$ci = companyIDInEmployee($email,$company_id,$mysqli);

class deactivateEmployee{
  public $message;
}

if( $ci == true){

$sql = "UPDATE `sponsor_users` SET `inactive`= 1 WHERE `company_id`='$company_id' AND `email_address` = '$email' ";
$entry = $mysqli->query($sql);

if($entry){
  $deactivate = new deactivateEmployee();
  $deactivate->message = "Success";

  echo json_encode($deactivate);

  // return json_encode($deactivate);

} }else {
  $deactivate = new deactivateEmployee();
  $deactivate->message = "Failed to deactivate employee.";

  // echo $mysqli->errno;

  echo json_encode($deactivate);

  // return json_encode($deactivate);
}


 ?>
