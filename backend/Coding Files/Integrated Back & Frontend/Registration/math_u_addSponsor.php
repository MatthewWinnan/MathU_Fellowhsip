<?php

include 'math_u_db_connection.php';
include 'math_u_registration_functions.php';
include 'all_classes.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if(isset($data['email_address']) and isset($data['password']) and isset($data['first_name']) and isset($data['last_name'])){

  $email = $data['email_address'];
  $pass = $data['password'];
  $first_name = $data['first_name'];
  $last_name = $data['last_name'];
  $dob = $data["date_of_birth"];//what's the name
  $isUnique = isUniqueEmail($email, $mysqli);
  $hashed_pass = GenerateHashPassword($pass);
  
  $new_user = new all_users();
  if ($isUnique === TRUE){

      $student_id = AddStudent($first_name, $last_name, $email, $hashed_pass, $dob, $mysqli);

      $u_id = GenerateUserID($student_id, 1);

  		if (UpdateStudentID($student_id, $u_id, $mysqli)===TRUE){

  		  if (AddToUsers($email, $u_id, $mysqli) === TRUE){
          
          $new_user->message = "Success! Your Account has been created. Check your email to verify account.";
          echo json_encode($new_user);
  		  }
        else {
			
          $new_user->message= "ERROR CONNECTION TO SERVER (ALL USERS) FAILED";
          echo json_encode($new_user);
        }
  	    }
      else {
        $new_user->message= "ERROR CONNECTION TO SERVER (STUDENT) FAILED";
        echo json_encode($new_user);
      }
    }
    else {
      $new_user->message = "Email address already exists!";
      echo json_encode($new_user);
    }
  }
  

 ?>
