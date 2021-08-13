<?php

include 'math_u_db_connection.php';
include 'math_u_registration_functions.php';

if(isset($_POST['email']) and isset($_POST['password']) and isset($_POST['first_name']) and isset($_POST['last_name'])){

  $email = $_POST['email'];
  $pass = $_POST['password'];
  $first_name = $_POST['first_name'];
  $last_name = $_POST['last_name'];
  $isUnique = isUniqueEmail($email, $mysqli);
  $hashed_pass = GenerateHashPassword($pass);

  if ($isUnique === TRUE){

      $student_id = AddStudent($first_name, $last_name, $email, $hashed_pass, $mysqli);

      $u_id = GenerateUserID($student_id, 1);

  		if (UpdateStudentID($student_id, $u_id, $mysqli)===TRUE){

  		  if (AddToUsers($email, $u_id, $mysqli) === TRUE){
          $message = array();
          $message["message"] = "Success!";
          echo json_encode($message);
  		  }
        else {
          $message["message"] = "Could not account add to all users";
          echo json_encode($message);
        }
  		}
      else {
        $message["message"] = "Could not update student ID";
        echo json_encode($message);
      }
    }
    else {
      $message["message"] = "Email address already exists";
      echo json_encode($message);
    }
  }

 ?>
