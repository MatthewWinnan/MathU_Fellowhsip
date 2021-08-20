<?php

//==============================================================================
//PROGRAM
//==============================================================================

function runProgram(){

  e_ex = isEmployeeExists(); # Check if Employee does not already exist

  if(e_ex == true){

    a_n_e = addNewEmployee(); # Add new employee

    if(a_n_e == true){

      s_e = sendEmail(); #Send Email

      if(s_e == true){

        viewEmployees(); # Return all employees belonging to sponsor. (View sponsor page)

      } else {
        $mail = new mailSend();
        $mail->message = "Failed to send email.";

        return json_encode($mail);
      }

    } else {
        $addEmployee = new Employee();
        $addEmployee->message = "An error occured whilst adding employee.";

      return json_encode($addEmployee);
    }

  } else {
    $EmployeeExists = new Exists();
    $EmployeeExists->message = "Employee already exists";

    return json_encode($EmployeeExists);
  }
}

//==============================================================================
//==============================================================================
//==============================================================================



//==============================================================================
// RUN PROGRAM
//==============================================================================

runProgram();

//==============================================================================
//==============================================================================
//==============================================================================



//==============================================================================
// LIST OF FUNCTIONS
//==============================================================================

function addNewEmployee(){ //Adds new employee to the database and sends email.

  // Connection

  $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');

  // included in case code does not run
  // $input = file_get_contents('php://input');
  // $data = json_decode($input, true);


  $role = $data['role_of_employee'];

  $sponsor_id = ucfirst($data['sponsor_id']);
  $first_name = $data['first_name_of_user'];
  $last_name = $data['last_name_of_user'];
  $email = strtolower($data['email_address']);
  $password = $data['password'];
  $company_id = $data['company_id'];
  $isSuperAdmin = $data['isSuperAdmin'];
  $manageBursaries = $data['manageBursaries'];
  $manageApplications = $data['manageApplications'];
  $inactive = $data['inactive'];
  $isVerified = $data['isVerified'];
  $regdate = date('Y-m-d');

  // Insert into database.

  if($isSuperAdmin == true){

  $sql = "INSERT INTO `sponsor_users` (`sponsor_id`, `first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `company_id`, `isSuperAdmin`, `manageBursaries`,  `manageApplications`, `inactive`, `isVerified`,`regisered_date`)
  VALUES ('$sponsor_id', '$first_name', '$last_name', '$email', '$password', '$company_id', 1, 1, 1, 0, 0, '$regdate')";
  $entry = $mysqli->query($sql);

} elseif ($manageBursaries == true AND $manageApplications == false AND isSuperAdmin == false){

  $sql = "INSERT INTO `sponsor_users` (`sponsor_id`, `first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `company_id`, `isSuperAdmin`, `manageBursaries`,  `manageApplications`, `inactive`, `isVerified`,`regisered_date`)
 VALUES ('$sponsor_id', '$first_name', '$last_name', '$email', '$password', '$company_id', 0, 1, 0, 0, 0, '$regdate')";
 $entry = $mysqli->query($sql);

} elseif ($manageBursaries == false AND $manageApplications == true AND isSuperAdmin == false){
  $sql = "INSERT INTO `sponsor_users` (`sponsor_id`, `first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `company_id`, `isSuperAdmin`, `manageBursaries`,  `manageApplications`, `inactive`, `isVerified`,`regisered_date`)
 VALUES ('$sponsor_id', '$first_name', '$last_name', '$email', '$password', '$company_id', 0, 0, 1, 0, 0, '$regdate')";
 $entry = $mysqli->query($sql);


  } else {
    $sql = "INSERT INTO `sponsor_users` (`sponsor_id`, `first_name_of_user`, `last_name_of_user`, `email_address`, `password`, `company_id`, `isSuperAdmin`, `manageBursaries`,  `manageApplications`, `inactive`, `isVerified`,`regisered_date`)
    VALUES ('$sponsor_id', '$first_name', '$last_name', '$email', '$password', '$company_id', 0, 1, 1, 0, 0, '$regdate')";
    $entry = $mysqli->query($sql);

  }

  if($entry){
    // sendEmail();
    return true;

  } else {
  //   $addEmployee = new Employee();
  // return json_encode($addEmployee);
  return false;
  }
}

//==============================================================================
//==============================================================================
//==============================================================================

function isEmployeeExists(){
  $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');
  $email = strtolower($data['email_address']);

  //Checks if employee is already in sponsor_users, if not, employee gets Added

  $dup = $mysqli->query("SELECT * FROM `sponsor_users` WHERE `email_address` = '$email'");
  if(mysqli_num_rows($dup)==0){
    return true;                   //Fetches all the company employees for the 'view employees' page that pops up
  } else {
  // echo "Employee already exists";
  // $EmployeeExists() = new Exists();
  // return json_encode($EmployeeExists);
  return false;
  }
}

//==============================================================================
//==============================================================================
//==============================================================================

function sendEmail(){ //===================================================================={{{{{{{{{{{[[[{{{{[[SHOULD BE MODIFIED TO SEND EMAILS FROM AN ONLINE SERVER]]}}}}]]]}}}}}}}}}}}

  $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');

  $first_name = $data['first_name_of_user'];
  $email = strtolower($data['email_address']);
  $sponsor_id = ucfirst($data['sponsor_id']);
  $pword = $first_name.$sponsor_id;

  // Send Email

  $to = $email;
  $subject = 'Your account has been created';
  $message = "Dear ".$first_name."\n\n"."Your account has been successfully created."."\n\n".
              "Please login using you email address and dummy password: $pword"."\n\n".
              "Please set a new password to verify your account."."\n\n".
              "Thank you for using MathU Fellows."."\n\n"."Please do not reply to this email.";

  if(mail($to,$subject,$message,'')) {
    return true;

  } else {
    return false;
  }

}

//==============================================================================
//==============================================================================
//==============================================================================

function viewEmployees(){      //Fetches all the company employees for the 'view employees' page that pops up
    $mysqli = new mysqli('localhost', 'root', '', 'math_u_fellows');
    $sponsor_id = ucfirst($data['sponsor_id']);
    $sql = "SELECT `first_name_of_user`, `last_name_of_user`, `email_address` FROM `sponsor_users` WHERE `sponsor_id` = '$sponsor_id'";
    $entry = $mysqli->query($sql);
    if($entry){
      $employees = array();
      $p = 0;
      while ($row = mysqli_fetch_array($entry, MYSQLI_ASSOC)) {
        $employees[$p] = $row;
        $p += 1;
      }
      $viewEmployees = new Employees();
      $viewEmployees->Employees = $employees;

      return json_encode($viewEmployees);

    } else {
      $viewEmployees = new Employees();

      return json_encode($viewEmployees);
    }
}

?>
