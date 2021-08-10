<?php

//All the functions needed to add the student after registration
// After registration the hashed password will all ready be in the database
// Tables needed: student, students+marks, subjects
// Email address required on in first line to get student inserts ID (the auto ID value for the other functions)

include_once 'math_u_db_connection.php';
include_once 'math_u_registration.php';

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$dob = $_POST['date_of_birth'];
$province = $_POST['province'];
$city = $_POST['city'];
$contact_number = $_POST['contact_number'];
$nationality = $_POST['nationality'];
$disability = $_POST['disability'];
$email = $_POST['email'];
$currentacad = $_POST['current_acad'];
$grade = $_POST['grade'];
$syllabus = $_POST['syllabus'];
$studyinst = $_POST['institution'];
$yearstudy = $_POST['year_of_study'];
$gpa = $_POST['GPA'];
$course = $_POST['course_name'];
$continue = $_POST['continue_studies'];
$studentbio = $_POST['student_bio'];

$student_id = getID($email, $mysqli);

function getID($email, $mysqli){
  $email = strtolower($email);
  $sql = "SELECT ID FROM student WHERE Email_address = '".$email."'";
  $result = $mysqli->query($sql);
  if ($result->num_rows>0){
    $row = $result->fetch_assoc();
    return $row["ID"];
  }
  else{
  }
}

function AddEditStudent($first_name, $last_name, $dob, $province, $city, $contact_number, $nationality, $disability, $student_id, $mysqli){

  $sql = "UPDATE student SET First_name = '$first_name', Last_name = '$last_name', Date_of_birth = '$dob', Province = '$province', City = '$city', Contact_number = '$contact_number', Nationality = '$nationality', Disability = '$disability' WHERE ID = '".$student_id."'";
  $result = $mysqli->query($sql);
  return $result;
}

function AddEditStudentBio($student_id, $studentbio, $mysqli){
  $sql = "UPDATE student SET Description_of_student = '$studentbio' WHERE ID = '".$student_id."'";
  $result = $mysqli->query($sql);
  return $result;
}

/*function AddSubjectMarks(int $student_id, $submarks){

  foreach ($submarks as $val){
    $subject = $val[0];
    $mark = $val[1];
    $sql = "INSERT INTO students+marks (Student_ID, Subject_name, Mark) VALUES ('$student_id', '$subject', '$mark')";
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
*/

function AddEditAcadHS($student_id, $currentacad, $grade, $syllabus, $mysqli){

  $sql = "UPDATE student SET Current_academic_level = '$currentacad', Grade = '$grade', Syllabus = '$syllabus' WHERE ID = '".$student_id."'";
  $result = $mysqli->query($sql);
  return $result;
}

function AddEditAcadUP($student_id, $currentacad, $course, $studyinst, $yearstudy, $gpa, $continue, $mysqli){
    $sql = "UPDATE student SET Current_academic_level = '$currentacad', Currently_studying = '$course', Study_institution = '$studyinst', Year_of_study = '$yearstudy', GPA = '$gpa', Continue_studies = '$continue' WHERE ID = '".$student_id."'";
    $result = $mysqli->query($sql);
    echo $currentacad;
    return $result;
  }

function AddEditCurrentAcad($student_id, $currentacad, $grade, $syllabus, $course, $studyinst, $yearstudy, $gpa, $continue, $mysqli){
  if ($currentacad == 'High School'){
    return AddEditAcadHS($student_id, $currentacad, $grade, $syllabus, $mysqli);
  }

  if ($currentacad == 'Undergraduate' || $currentacad == 'Postgraduate') {

    return AddEditAcadUP($student_id, $currentacad, $course, $studyinst, $yearstudy, $gpa, $continue, $mysqli);
    }
  }

AddEditStudentBio($student_id, $studentbio, $mysqli);

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
