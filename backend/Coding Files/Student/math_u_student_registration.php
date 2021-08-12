<?php

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
