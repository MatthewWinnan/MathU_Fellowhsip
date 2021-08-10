<?php

//All the functions needed to add the student after registration
// After registration the hashed password will all ready be in the database
// Tables needed: student, students+marks, subjects
// Email address required on in first line to get student inserts ID (the auto ID value for the other functions)

include_once 'math_u_db_connection.php';
include_once 'math_u_registration.php'

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$dob = $_POST['date_of_birth'];
$province = $_POST['province'];
$city = $_POST['city'];
$nationality = $_POST['nationality'];
$disability = $_POST['disability'];
$email = $_POST['email'];
$submarks = $_POST['submarks'] // this is a nested array
$filters = $_POST['filters'] //array of filters

$student_id = AddStudent($first_name, $last_name, $dob, $province, $city, $contact_number, $nationality, $disability, $email, $mysqli)


function AddStudent($first_name, $last_name, $dob, $province, $city, $contact_number, $nationality, $disability, $email, $mysqli){

  $email = strtolower($email);
  $sql = "INSERT INTO student (First_name, Last_name, Date_of_birth, Province, City, Contact_number, Nationaltity, Disability) VALUES = ('$first_name', '$last_name', '$dob', '$province', '$city', '$nationality', 'disability')
  WHERE Email_address = '".$email."'";
  if($mysqli->query($sql)=== TRUE){
		return $mysqli->insert_id;
	}
	else{
		echo $mysqli->error;
		return 0;
}

function EditStudent($first_name, $last_name, $dob, $province, $city, $contact_number, $nationality, $disability, int $student_id, $mysqli){

  $sql = "UPDATE student SET First_name = '$first_name', Last_name = '$last_name', Date_of_birth = '$dob', Province = '$province', City = '$city', Contact_number = '$contact_number', Nationaltity = '$nationality', Disability = '$disability'
  WHERE ID = '".$student_id."'";
  $result = $mysqli->query($sql);
  return $result;
}

function AddStudentBio(int $student_id, $studentbio){
  $sql = "INSERT INTO student (Description_of_student) VALUES ('$studentbio') WHERE ID = '".$student_id."'";
  $result = $mysqli->query($sql);
  return $result;
}

function EditStudentBio(int $student_id, $student_bio){
  $sql = "UPDATE student SET Description_of_student = '$studentbio' WHERE ID = '".$student_id."'";
  $result = $mysqli->query($sql);
  return $result;
}

function AddSubjectMarks(int $student_id, $submarks){

  foreach ($submarks as $val){
    $subject = $val[0];
    $mark = $val[1];
    $sql = "INSERT INTO students+marks (Student_ID, Subject_name, Mark) VALUES ('$student_id', '$subject', '$mark')"
    $result = $mysqli->query($sql);
  }
  return $result;
}

function EditSubjectMarks(int $student_id, $submarks){

  foreach ($submarks as $val){
    $subject = $val[0];
    $mark = $val[1];
    $sql = "UPDATE students+marks SET Subject_name = '$subject', Mark = '$mark' WHERE Student_ID = '".$student_id."'";
    $result = $mysqli->query($sql);
  }
  return $result;
}

function Addfilters(int $student_id, $filters){
  $sql = "INSERT INTO student (Filters) VALUES ('$filters') WHERE ID = '".$student_id."'";
  $result = $mysqli->query($sql);
  return $result;
}

function EditFilters(int $student_id, $filters){
  $sql = "UPDATE student SET Filters = '$filters' WHERE ID = '".$student_id."'";
  $result = $mysqli->query($sql);
  return $result;
}

function Display($result){
	//Check results is not an empty array
	if ($result != null){
		echo json_encode($result);
	}
	else{
		echo "No Results Found";
	}
}
 ?>
