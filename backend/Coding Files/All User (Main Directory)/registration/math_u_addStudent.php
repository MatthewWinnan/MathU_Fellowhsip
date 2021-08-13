<?php

include 'math_u_db_connection.php';
include 'math_u_registration_functions.php';
include 'all_classes.php';

if(isset($_POST['email']) and isset($_POST['password']) and isset($_POST['first_name']) and isset($_POST['last_name'])){

  $email = $_POST['email'];
  $pass = $_POST['password'];
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $isUnique = isUniqueEmail($email, $mysqli);
  $hashed_pass = GenerateHashPassword($pass);
  
  $new_user = new all_users();
  if ($isUnique === TRUE){

      $student_id = AddStudent($first_name, $last_name, $email, $hashed_pass, $mysqli);

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
