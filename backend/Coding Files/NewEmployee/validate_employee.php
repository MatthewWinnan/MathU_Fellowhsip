<?php

//=================================================================================
// Connection
//==============================================================================================================================[[[[[[[[[Commets for Benis Here]]]]]]]]]==================

if(isset($_POST['submit'])) {

$first_name = $_POST['fname'];
$last_name = $_POST['lname'];
$email = $_POST['email'];
$sponsor_id = $_POST['sponsor_id'];

if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE) {
  exit("Invalid Email");
}

//=================================================================================
// WORKING FUNCTIONS
//=================================================================================

// getCompanyID();
// addNewEmployee();
//sendEmail();
// viewEmployees();
// isEmployeeExists();
runProgram();
}

//===================================================
// Tables Required: sponsor_user, company
//===================================================


//============================
//List of functions:
//============================

function addNewEmployee(){ //Adds new employee to the database and sends email.

  // Connection

  $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');


  $role = $_POST['role_of_employee'];
  $first_name = $_POST['fname'];
  $last_name = $_POST['lname'];
  $regdate = date('Y-m-d');
  $email = strtolower($_POST['email']);
  $sponsor_id = ucfirst($_POST['sponsor_id']);
  $password = md5($first_name.$sponsor_id);
 // $company_id = '';-----------------------------------CAUSES DATATYPE MISMATCH
  $company_id = getCompanyID($_POST['company_name']);  //===================================================[[[[[Assign the Company ID within the add employee function -> Does not update automatically]]]]]]=============================
  // echo "Company ID: ".$company_id."<br><br>";

  if($role == 'SuperAdmin'){

  $sql = "INSERT INTO `sponsor_users` (`sponsor_id`, `first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `regisered_date`,`company_id`, `isSuperAdmin`)
  VALUES ('$sponsor_id', '$first_name', '$last_name', '$email', '$password', '$regdate','$company_id', 1)";
  $entry = $mysqli->query($sql);

} elseif ($role == 'manageBursaries'){

$sql = "INSERT INTO `sponsor_users` (`sponsor_id`, `first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `regisered_date`,`company_id`, `manageBursaries`)
VALUES ('$sponsor_id', '$first_name', '$last_name', '$email', '$password', '$regdate','$company_id', 1)";
$entry = $mysqli->query($sql);

} else {
$sql = "INSERT INTO `sponsor_users` (`sponsor_id`, `first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `regisered_date`,`company_id`, `manageApplications`)
VALUES ('$sponsor_id', '$first_name', '$last_name', '$email', '$password', '$regdate','$company_id', 1)";
$entry = $mysqli->query($sql);

}

if($entry){
  sendEmail();
} else {
  echo "Error Code: ".$mysqli->errno;
}
}

//====================================================================================================

//====================================================================================================

function runProgram(){
  isEmployeeExists();
}

//====================================================================================================

function sendEmail(){ //===================================================================={{{{{{{{{{{[[[{{{{[[SHOULD BE MODIFIED TO SEND EMAILS FROM AN ONLINE SERVER]]}}}}]]]}}}}}}}}}}}

  $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');

  $first_name = $_POST['fname'];
  $email = strtolower($_POST['email']);
  $sponsor_id = ucfirst($_POST['sponsor_id']);
  $pword = $first_name.$sponsor_id;

  // Send Email

  $to = $email;
  $subject = 'Your account has been created';
  $message = "Dear ".$first_name."\n\n"."Your account has been successfully created."."\n\n".
              "Please login using you email address and dummy password: $pword"."\n\n".
              "Please set a new password to verify your account."."\n\n".
              "Thank you for using MathU Fellows."."\n\n"."Please do not reply to this email.";

  if(mail($to,$subject,$message,'')) {
    echo "<script>alert('Email sent');</script>";
  } else {
    echo "Failed to send email. Error Code: ".$mysqli->errno;
  };

}

//====================================================================================================

function viewEmployees(){
    $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');
    $sponsor_id = ucfirst($_POST['sponsor_id']);
    $sql = "SELECT `first_name_of_user`, `last_name_of_user`, `email_address` FROM `sponsor_users` WHERE `sponsor_id` = '$sponsor_id'";
    $entry = $mysqli->query($sql);
    if($entry){
      $employees = array();
      $p = 0;
      while ($row = mysqli_fetch_array($entry, MYSQLI_ASSOC)) {
        $employees[$p] = $row;
        $p += 1;
      }
      print_r($employees);
    } else {
      echo "Could not view employees. Error Code: ".$mysqli->errno;
    }
}

//====================================================================================================

function getCompanyID() { //====================================================================================================[[[[[[Get Company ID function]]]]]]========================
  // Connection
  $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');
  $res = 0;//NEW VARIABLE
  if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
      }
        // Get ID using Company Name
        $company_name = $_POST['company_name'];
        if($company_name){
              $sql = "SELECT `company_id` FROM `company` WHERE `company_name` = '$company_name' LIMIT 1";
                if($res1 = $mysqli->query($sql)){
                  $res2 = mysqli_fetch_array($res1, MYSQLI_ASSOC);
                  $res = $res2['company_id'];//REMOVED PRINT

          } else {
            echo "Query not processed".$mysqli->errno;
          }

      } else {
        echo "Something went wrong. Company Name not found.";
      }
  return $res;
  }

  //====================================================================================================

function isEmployeeExists(){
  $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');
  $email = strtolower($_POST['email']);

  //Checks if employee is already in sponsor_users, if not, employee gets Added

  $dup = $mysqli->query("SELECT * FROM `sponsor_users` WHERE `email_address` = '$email'");
  if(mysqli_num_rows($dup)==0){
    addNewEmployee();
    viewEmployees();
  } else {
  echo "Employee already exists";
  }
}

//====================================================================================================

//====================================================================================================

//====================================================================================================

 ?>
