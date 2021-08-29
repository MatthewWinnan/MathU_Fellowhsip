<?php

include 'math_u_db_connection.php';

//==============================================================================

$input = file_get_contents('php://input');
/*$input = '{
    "id": 35,
    "student_id": "U035",
    "first_name": "Mary",
    "last_name": "Lamb",
    "date_of_birth": "2005-08-28",
    "email_address": "mary@gmail.com",
    "password": "",
    "validated": 0,
    "nationality": true,
    "contact_number": "123456789",
    "city": "Centurion",
    "province": "Gauteng",
    "disability": true,
    "current_academic_level": "High School",
    "grade": "12",
    "syllabus": "Other",
    "average": 70,
    "currently_studying": "",
    "year_of_study": "",
    "study_institution": "",
    "continue_studies": null,
    "gpa": 0,
    "description_of_student": "This is a good child.",
    "bursarred": true,
    "current_bursaries": "Hello",
    "workback": true,
    "website": "www.mary.com",
    "number_of_reports": 0,
    "banned": false,
    "Students_marks": []
}';*/
/*$input = '{
    "id": 35,
    "student_id": "U035",
    "first_name": "Mary",
    "last_name": "Lamb",
    "date_of_birth": "2005-08-28",
    "email_address": "mary@gmail.com",
    "password": "",
    "validated": 0,
    "nationality": true,
    "contact_number": "123456789",
    "city": "Centurion",
    "province": "Gauteng",
    "disability": true,
    "current_academic_level": "Undergraduate",
    "grade": "12",
    "syllabus": "Other",
    "average": 70,
    "currently_studying": "Computer Engineering",
    "year_of_study": "3rd",
    "study_institution": "University of Pretoria (UP)",
    "continue_studies": true,
    "gpa": 63.6,
    "description_of_student": "This is a good child.",
    "bursarred": true,
    "current_bursaries": "Hello",
    "workback": true,
    "website": "www.mary.com",
    "number_of_reports": 0,
    "banned": false,
    "Students_marks": []
}';*/
$data = json_decode($input, true);

//==============================================================================

$student_id = $data['student_id'];
//$student_id = studentID(intval(substr('$student_id', 1)));
$nationality = $data['nationality'] ;
$contact_number = $data['contact_number'];
$city = $data['city'];
$province = $data['province'];
$disability = $data['disability'];
$current_academic_level = $data['current_academic_level'];
$grade = $data['grade'] ;
$syllabus = $data['syllabus'];
$average = $data['average'];
$currently_studying = $data['currently_studying'];
$year_of_study = $data['year_of_study'] ;
$study_institution = $data['study_institution'] ;
$continue_studies = $data['continue_studies'] ;
$gpa = $data['gpa'] ;
$description_of_student = $data['description_of_student'] ;
$bursarred = $data['bursarred'] ;
$current_bursaries = $data['current_bursaries'];
$workback = $data['workback'];
$website = $data['website'];

//==============================================================================

class Student{
  public $message;
}

//==============================================================================

$sql1 = "SELECT `Student_ID`, `First_name`, `Last_name`, `Date_of_birth`, `Email_address`, `Nationality`, `Contact_number`, `City`,
`Province`, `Disability`, `Current_academic_level`, `Grade`, `Syllabus`, `Average`, `Currently_studying`, `Year_of_study`, `Study_institution`,
`Continue_studies`, `GPA`, `Description_of_student`, `Bursarred`, `Current_bursaries`, `Workback`, `Website`
FROM `student` WHERE `Student_ID` = '$student_id'";


$student_details = mysqli_query($mysqli,$sql1);
$studentrow = mysqli_fetch_array($student_details,MYSQLI_ASSOC);

$ci = studentIDinStudent($student_id,$mysqli);

if($ci == true){

  foreach ($studentrow as $key => $value) {

    #Nationality
    if ($key == 'Nationality') {
      if($studentrow[$key] == $nationality){
        // continue;
      } else {
        $studentrow[$key] = $nationality;
        $mysqli->query("UPDATE `student` SET `Nationality` = '$nationality' WHERE `Student_ID` = '$student_id'");
      }}

    #Contact Number
    if ($key == 'Contact_number') {
      if($studentrow[$key] == $contact_number){

      } else {
        $mysqli->query("UPDATE `student` SET `Contact_number` = '$contact_number' WHERE `Student_ID` = '$student_id'");
      }}


    #City
    if ($key == 'City') {
      if($studentrow[$key] === $city){


      } else {
        $mysqli->query("UPDATE `student` SET `City` = '$city' WHERE `Student_ID` = '$student_id'");

      }}

    #Province
    if ($key == 'Province') {
      if($studentrow[$key] == $province){

      } else {
        $mysqli->query("UPDATE `student` SET `Province` = '$province' WHERE `Student_ID` = '$student_id'");
      }}

    #Disability
    if ($key == 'Disability') {
      if($studentrow[$key] == $disability){

      } else {
        $mysqli->query("UPDATE `student` SET `Disability` = '$disability' WHERE `Student_ID` = '$student_id'");
      }}

    #Current_academic_level
    if ($key == 'Current_academic_level') {
      if($studentrow[$key] == $current_academic_level){

      } else {
        $mysqli->query("UPDATE `student` SET `Current_academic_level` = '$current_academic_level' WHERE `Student_ID` = '$student_id'");
      }}

    #Grade
    if ($key == 'Grade') {
      if($studentrow[$key] == $grade){

      } else {
        $mysqli->query("UPDATE `student` SET `Grade` = '$grade' WHERE `Student_ID` = '$student_id'");
      }}

    #Syllabus
    if ($key == 'Syllabus') {
      if($studentrow[$key] == $syllabus){

      } else {
        $mysqli->query("UPDATE `student` SET `Syllabus` = '$syllabus' WHERE `Student_ID` = '$student_id'");
      }}

    #Average
    if ($key == 'Average') {
      if($studentrow[$key] == $average){
        // continue;
      } else {
        $mysqli->query("UPDATE `student` SET `Average` = '$average' WHERE `Student_ID` = '$student_id'");
      }}

    #Currently_studying
    if ($key == 'Currently_studying') {
      if($studentrow[$key] == $currently_studying){

      } else {
        $mysqli->query("UPDATE `student` SET `Currently_studying` = '$currently_studying' WHERE `Student_ID` = '$student_id'");
      }}

    #Year_of_study
    if ($key == 'Year_of_study') {
      if($studentrow[$key] == $year_of_study){

      } else {
        $mysqli->query("UPDATE `student` SET `Year_of_study` = '$year_of_study' WHERE `Student_ID` = '$student_id'");
      }}

    #Study_institution
    if ($key == 'Study_institution') {
      if($studentrow[$key] == $study_institution){

      } else {
        $mysqli->query("UPDATE `student` SET `Study_institution` = '$study_institution' WHERE `Student_ID` = '$student_id'");
      }}

    #Continue_studies
    if ($key == 'Continue_studies') {
      if($studentrow[$key] == $continue_studies){

      } else {
        $mysqli->query("UPDATE `student` SET `Continue_studies` = '$continue_studies' WHERE `Student_ID` = '$student_id'");
      }}

    #GPA
    if ($key == 'GPA') {
      if($studentrow[$key] == $gpa){

      } else {
        $mysqli->query("UPDATE `student` SET `GPA` = '$gpa' WHERE `Student_ID` = '$student_id'");
      }}

    #Description_of_student
    if ($key == 'Description_of_student') {
      if($studentrow[$key] == $description_of_student){

      } else {
        $mysqli->query("UPDATE `student` SET `Description_of_student` = '$description_of_student' WHERE `Student_ID` = '$student_id'");
      }}

    #Bursarred
    if ($key == 'Bursarred') {
      if($studentrow[$key] == $bursarred){

      } else {
        $mysqli->query("UPDATE `student` SET `Bursarred` = '$bursarred' WHERE `Student_ID` = '$student_id'");
      }}

    #Current_bursaries
    if ($key == 'Current_bursaries') {
      if($studentrow[$key] == $current_bursaries){

      } else {
        $mysqli->query("UPDATE `student` SET `Current_bursaries` = '$current_bursaries' WHERE `Student_ID` = '$student_id'");
      }}

    #Workback
    if ($key == 'Workback') {
      if($studentrow[$key] == $workback){

      } else {
        $mysqli->query("UPDATE `student` SET `Workback` = '$workback' WHERE `Student_ID` = '$student_id'");
      }}

    #Website
    if ($key == 'Website') {
      if($studentrow[$key] == $website){

      } else {
        $mysqli->query("UPDATE `student` SET `Website` = '$website' WHERE `Student_ID` = '$student_id'");
      }}

  }

  $updateStudent = new Student();
  $updateStudent->message = "Student Updated.";

  echo json_encode($updateStudent);

} else {

  $updateStudent = new Student();
  $updateStudent->message = "Student ID does not exist";

  echo json_encode($updateStudent);
}

//==============================================================================
//==============================================================================
//==============================================================================

function studentIDinStudent($student_id,$mysqli){
  $sql = "SELECT * FROM `student` WHERE  `Student_ID` = '$student_id'";
  $result = $mysqli->query($sql);
  if ($result->num_rows>0){
    return true;
  }
  else{ return false;
}
}

//==============================================================================
//==============================================================================
//==============================================================================

function studentID($student_id){

  if($student_id < 10){
    return "U00".$student_id;

  } elseif ($student_id < 100) {
    return "U0".$student_id;

  } else {
    return "U".$student_id;
  }
}

//==============================================================================
//==============================================================================
//==============================================================================

 ?>
