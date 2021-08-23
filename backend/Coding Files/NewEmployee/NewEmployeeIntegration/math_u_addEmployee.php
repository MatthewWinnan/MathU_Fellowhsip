<?php

include 'math_u_db_connection.php';
include 'math_u_registration_functions.php';
include 'math_u_addEmployee_functions.php';
include 'all_classes.php';

//==============================================================================
//==============================================================================
//==============================================================================

$input = file_get_contents('php://input');
$data = json_decode($input, true);


$first_name = $data['first_name_of_user'];
$last_name = $data['last_name_of_user'];
$email = strtolower($data['email_address']);
$password = GenerateHashPassword($data['password']);
$company_id = $data['company_id'];
$isSuperAdmin = $data['isSuperAdmin'];
$manageBursaries = $data['manageBursaries'];
$manageApplications = $data['manageApplications'];
$inactive = $data['inactive'];
$isVerified = $data['isVerified'];
$regdate = date('Y-m-d');

//==============================================================================
//==============================================================================
//==============================================================================

$new_user = new all_users();

$e_ex = isUniqueEmail($email, $mysqli); # Check if Employee does not already exist

if($e_ex == true){

  $add = addNewEmployee($first_name, $last_name, $email, $password, $company_id, $isSuperAdmin, $manageBursaries, $manageApplications, $inactive, $isVerified, $regdate);

  $a_n_e = $add [0]; # Add new employee
  $insert_id = $add [1];

  $sponsor_id = sponsorID($insert_id);

  updateSID($sponsor_id, $email, $mysqli, $company_id);

  addAU($sponsor_id, $email, $mysqli);

  if($a_n_e == true){

      $new_user->message = "Employee successfully added!";
      
      echo json_encode($new_user);

  } else {

      $new_user->message = "An error occured whilst adding employee.";

    echo json_encode($new_user);
  }

} else {

  $new_user->message = "Employee already exists";

  echo json_encode($new_user);
}

 ?>
