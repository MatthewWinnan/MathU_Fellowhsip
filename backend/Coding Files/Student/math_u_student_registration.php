<?php

include_once 'math_u_registration.php';
include_once 'math_u_db_connection.php';

if(isset($_POST['email']) and isset($_POST['password'])){

  $email = $_POST['email'];
  $pass = $_POST['password'];
  $isUnique = isUniqueEmail($email, $mysqli);
  $hashed_pass = GenerateHashPassword($pass);

  if ($isUnique === TRUE){
      $student_id = AddStudent($email, $hashed_pass, $mysqli);

      if ($student_id != 0){
          $u_id = GenerateUserID($student_id, 1);

          if (UpdateStudentID($student_id, $u_id, $mysqli)===TRUE){

            if (AddToUsers($email, $u_id, $mysqli) === TRUE){
              echo "New student added successfully";
              echo "<script>window.location.href='student_input_test_page1.html'</script>";
              return $student_id;
            }
          }
        }
      }
      else {
        echo "This email address already exists";
      }
    }



function AddStudent($email, $hashed_pass, $mysqli){

  $date = date("Y-m-d");
  $sql = "INSERT INTO student (Email_address, Password, Registerred_date) VALUES ('$email', '$hashed_pass', '$date')";

  if($mysqli->query($sql) === TRUE){
    return $mysqli->insert_id;
  }
  else{
    return 0;
  }
}

function UpdateStudentID($student_id, $u_id, $mysqli){

  $sql = "UPDATE student SET Student_ID = '$u_id' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

 ?>
