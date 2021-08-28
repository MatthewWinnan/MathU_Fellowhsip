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

$marks = new student($studentrow['Student_ID'], $studentrow['First_name'], $studentrow['Last_name'], $studentrow['Date_of_birth'], $studentrow['Email_address'], $studentrow['Nationality'], $studentrow['Contact_number'],
                      $studentrow['City'], $studentrow['Province'], $studentrow['Disability'], $studentrow['Current_academic_level'], $studentrow['Grade'], $studentrow['Syllabus'], $studentrow['Average'], $studentrow['Currently_studying'],
                      $studentrow['Year_of_study'], $studentrow['Study_institution'], $studentrow['Continue_studies'], $studentrow['GPA'], $studentrow['Description_of_student'], $studentrow['Bursarred'],$studentrow['Current_bursaries'],
                      $studentrow['Workback'], $studentrow['Website'], $markrow);
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

class student{

	public $student_id;
	public $first_name;
	public $last_name;
	public $date_of_birth;
	public $email_address;
	public $nationality;
	public $contact_number;
	public $city;
	public $province;
	public $disability;
	public $current_academic_level;
	public $grade;
	public $syllabus;
	public $average;
	public $currently_studying;
	public $year_of_study;
	public $study_institution;
	public $continue_studies;
	public $gpa;
	public $description_of_student;
	public $bursarred;
	public $current_bursaries;
	public $workback;
	public $website;


  public $Students_marks;


	// public subject_marks $Students_marks;

	public function __construct($student_id, $first_name, $last_name, $date_of_birth, $email_address, $nationality, $contact_number, $city, $province, $disability,
   $current_academic_level, $grade, $syllabus, $average, $currently_studying, $year_of_study, $study_institution, $continue_studies, $gpa, $description_of_student, $bursarred,
    $current_bursaries, $workback, $website, $Students_marks){
		 $this->student_id = $student_id;
		 $this->first_name = $first_name;
		 $this->last_name = $last_name;
		 $this->date_of_birth = $date_of_birth;
		 $this->email_address = $email_address;
		 $this->nationality = $nationality;
		 $this->contact_number = $contact_number;
		 $this->city = $city;
		 $this->province = $province;
		 $this->disability = $disability;
		 $this->current_academic_level = $current_academic_level;
		 $this->grade = $grade;
		 $this->syllabus = $syllabus;
		 $this->average = $average;
		 $this->currently_studying = $currently_studying;
		 $this->year_of_study = $year_of_study;
		 $this->study_institution = $study_institution;
		 $this->continue_studies = $continue_studies;
		 $this->gpa = $gpa;
		 $this->description_of_student = $description_of_student;
		 $this->bursarred = $bursarred;
		 $this->current_bursaries = $current_bursaries;
		 $this->workback = $workback;
		 $this->website = $website;
     $this->Students_marks = $Students_marks;
	 }
}

//==============================================================================
//==============================================================================
//==============================================================================

 ?>
