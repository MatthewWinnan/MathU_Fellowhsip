<?php

include 'math_u_registration.php';
include 'math_u_db_connection.php';


function AddStudent($first_name, $last_name, $email, $hashed_pass, $mysqli){

  $date = date("Y-m-d");
  $sql = "INSERT INTO student (First_name, Last_name, Email_address, Password, Registerred_date) VALUES ('$first_name', '$last_name','$email', '$hashed_pass', '$date')";

  if($mysqli->query($sql)=== TRUE){
		http_response_code(201);
		return $mysqli->insert_id;
	}
	else{
		http_response_code(422);
		return 0;
	}
}

function UpdateStudentID($student_id, $u_id, $mysqli){

  $sql = "UPDATE student SET Student_ID = '$u_id' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		http_response_code(201);
		return true;
	}
	else{
		http_response_code(422);
		return false;
	}
}

function display(int $student_id, $mysqli){
	$sql = "SELECT (Email_address, Password) FROM student WHERE ID = $student_id";
	$result = $mysqli->query($sql);

	if ($result->num_rows>0){
		http_response_code(201);
		$row = $result->fetch_assoc();
		$Obj=new \stdClass();
		$Obj->email = $row["email_address"];
		$Obj->password = $row["Password"];
		return $Obj;
	}
	else{
		http_response_code(422);
		return null;
	}
}

 ?>
