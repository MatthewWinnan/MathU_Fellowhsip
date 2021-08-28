<?php

include 'math_u_db_connection.php';
//
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// $email = 'queen@elsa.com';
$email = $data['email_address'];

class SubjectMarks{
  // public $Students_marks;
}

$marks = new SubjectMarks();


$ci = emailInStudent($email,$mysqli);

if($ci == 'true'){

$markrow = array();
$sql1 = "SELECT `Student_ID`, `First_name`, `Last_name`, `Date_of_birth`, `Email_address`, `Nationality`, `Contact_number`, `City`,
`Province`, `Disability`, `Current_academic_level`, `Grade`, `Syllabus`, `Average`, `Currently_studying`, `Year_of_study`, `Study_institution`,
`Continue_studies`, `GPA`, `Description_of_student`, `Bursarred`, `Current_bursaries`, `Workback`, `Website`
FROM `student` WHERE `Email_address` = '$email'";


$student_details = mysqli_query($mysqli,$sql1);
$studentrow = mysqli_fetch_array($student_details,MYSQLI_ASSOC); //array storing student details

foreach ($studentrow as $key => $value) {
  if ($value == null) {
    $studentrow[$key] = "";
    // continue;
  }
  if($value == '1'){
    $studentrow[$key] = 'true';
  } if ($value === '0') {
    $studentrow[$key] = 'false';
  }
}

$sid = substr(mysqli_fetch_array($mysqli->query("SELECT `User_ID` FROM `all_users` WHERE `Email_address` = '$email'"),MYSQLI_ASSOC)['User_ID'], 1);

$sql2 = "SELECT `Subject_name`, `Mark` FROM `subjects_marks`
  WHERE `Student_ID` = '$sid'";
$subjects_marks = $mysqli->query($sql2);


if($subjects_marks) {
// Display the subjects and marks
$p = 0;

  while($entry = mysqli_fetch_array($subjects_marks,MYSQLI_ASSOC)) {

    $markrow[$p] = $entry; //Appends the subject and mark into the $markrow array
    $p += 1;

}

$studentrow['Students_marks'] = $markrow;

$marks->student = $studentrow;
// $marks = $studentrow;

echo json_encode($marks);

// echo "<br><br><br>";
// $marks = $studentrow;
// echo json_encode($marks);

} else {

  $marks->message = "0 results found.";

  echo json_encode($marks);
  // echo $mysqli->errno;
}
} else {
  $marks->message = "Email does not exist.";
  echo json_encode($marks);
}

//==============================================================================
//==============================================================================
//==============================================================================

function emailInStudent($email,$mysqli){
  $sql = "SELECT * FROM `student` WHERE  `Email_address` = '$email'";
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

 ?>
