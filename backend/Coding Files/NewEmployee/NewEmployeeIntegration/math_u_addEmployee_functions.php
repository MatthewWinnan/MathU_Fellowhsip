<?php

//==============================================================================
// LIST OF FUNCTIONS
//==============================================================================

function addNewEmployee($first_name,$last_name,$email,$password,$company_id,$isSuperAdmin,$manageBursaries,$manageApplications,$inactive,$isVerified,$regdate){ //Adds new employee to the database and sends email.

  include 'math_u_db_connection.php';

  // Insert into database.

  if($isSuperAdmin == true AND $manageApplications == true AND $manageBursaries == true){

  $sql = "INSERT INTO `sponsor_users` (`first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `company_id`, `isSuperAdmin`, `manageBursaries`,  `manageApplications`, `inactive`, `isVerified`,`regisered_date`)
  VALUES ('$first_name', '$last_name', '$email', '$password', '$company_id', 1, 1, 1, 0, 0, '$regdate')";
  $entry = $mysqli->query($sql);

} elseif ($manageBursaries == true AND $manageApplications == false AND isSuperAdmin == false){

  $sql = "INSERT INTO `sponsor_users` (`first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `company_id`, `isSuperAdmin`, `manageBursaries`,  `manageApplications`, `inactive`, `isVerified`,`regisered_date`)
 VALUES ('$first_name', '$last_name', '$email', '$password', '$company_id', 0, 1, 0, 0, 0, '$regdate')";
 $entry = $mysqli->query($sql);

} elseif ($manageBursaries == false AND $manageApplications == true AND isSuperAdmin == false){
  $sql = "INSERT INTO `sponsor_users` (`first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `company_id`, `isSuperAdmin`, `manageBursaries`,  `manageApplications`, `inactive`, `isVerified`,`regisered_date`)
 VALUES ('$first_name', '$last_name', '$email', '$password', '$company_id', 0, 0, 1, 0, 0, '$regdate')";
 $entry = $mysqli->query($sql);


  } else {
    $sql = "INSERT INTO `sponsor_users` (`sponsor_id`, `first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `company_id`, `isSuperAdmin`, `manageBursaries`,  `manageApplications`, `inactive`, `isVerified`,`regisered_date`)
    VALUES ('$sponsor_id', '$first_name', '$last_name', '$email', '$password', '$company_id', 0, 1, 1, 0, 0, '$regdate')";
    $entry = $mysqli->query($sql);

  }

  if($entry){
    return [true, $mysqli->insert_id];

  } else {
  return [false, 0];
  }
}

//==============================================================================
//==============================================================================
//==============================================================================

// function sendEmail(){ //=========={{{{{{{{{{{[[[{{{{[[SHOULD BE MODIFIED TO SEND EMAILS FROM AN ONLINE SERVER]]}}}}]]]}}}}}}}}}}}
//
//   $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');
//
//   $first_name = $data['first_name_of_user'];
//   $email = strtolower($data['email_address']);
//   $sponsor_id = ucfirst($data['sponsor_id']);
//   $pword = $first_name.$sponsor_id;
//
//   // Send Email
//
//   $to = $email;
//   $subject = 'Your account has been created';
//   $message = "Dear ".$first_name."\n\n"."Your account has been successfully created."."\n\n".
//               "Please login using you email address and dummy password: $pword"."\n\n".
//               "Please set a new password to verify your account."."\n\n".
//               "Thank you for using MathU Fellows."."\n\n"."Please do not reply to this email.";
//
//   if(mail($to,$subject,$message,'')) {
//     return true;
//
//   } else {
//     return false;
//   }
//
// }

//==============================================================================
//==============================================================================
//==============================================================================

function viewEmployees($mysqli, $company_id){      //Fetches all the company employees for the 'view employees' page that pops up

  class allEmployees{
    public $Employees;
  }


    $sql = "SELECT `first_name_of_user`, `last_name_of_user`, `email_address` FROM `sponsor_users` WHERE `company_id` = '$company_id'";
    $entry = $mysqli->query($sql);

    if($entry){

      $employees = array();
      $p = 0;

      while ($row = mysqli_fetch_array($entry, MYSQLI_ASSOC)) {

        $employees[$p] = $row;
        $p += 1;
      }
      $viewEmployees = new allEmployees();
      $viewEmployees->Employees = $employees;

      echo json_encode($viewEmployees);

    } else {
      $viewEmployees = new Employees();
      $viewEmployees->Employees = "";

      echo json_encode($viewEmployees);
    }
}

//==============================================================================
//==============================================================================
//==============================================================================

function sponsorID($insert_id){

  if($insert_id < 10){
    return "S00".$insert_id;

  } elseif ($insert_id < 100) {
    return "S0".$insert_id;

  } else {
    return "S".$insert_id;
  }
}

//==============================================================================
//==============================================================================
//==============================================================================

function updateSID($sponsor_id, $email, $mysqli, $company_id){
  $sql = "UPDATE `sponsor_users` SET `sponsor_id`='$sponsor_id' WHERE `email_address`='$email' AND `company_id`='$company_id'";
  $mysqli->query($sql);
}

//==============================================================================
//==============================================================================
//==============================================================================

function addAU($sponsor_id, $email, $mysqli){
  $sql = "INSERT INTO `all_users`(`User_ID`, `Email_address`) VALUES ('$sponsor_id','$email')";
  $mysqli->query($sql);
}

//==============================================================================
//==============================================================================
//==============================================================================



?>
