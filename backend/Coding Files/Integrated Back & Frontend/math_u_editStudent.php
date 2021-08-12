<?php

//All the functions needed to add the student after registration
// After registration the hashed password will all ready be in the database
// Tables needed: student, students+marks, subjects
// Email address required on in first line to get student inserts ID (the auto ID value for the other functions)

include_once 'math_u_db_connection.php';
include_once 'math_u_registration.php';
include_once 'math_u_student_registration.php';
include_once 'math_u_editStudent_functions.php';


$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();

$email = $data['email'];
$pass = $data['password'];
$isUnique = isUniqueEmail($email, $mysqli);
$hashed_pass = GenerateHashPassword($pass);

if ($isUnique === TRUE){
    $student_id = AddStudent($email, $hashed_pass, $mysqli);
    echo "New student added successfully ".$student_id;
    if ($student_id > 0) {

  $first_name = $data['first_name'];
  $last_name = $data['last_name'];
  $dob = $data['date_of_birth'];
  $province = $data['province'];
  $city = $data['city'];
  $contact_number = $data['contact_number'];
  $nationality = $data['nationality'];
  $disability = $data['disability'];
  $currentacad = $data['current_acad'];
  $grade = $data['grade'];
  $syllabus = $data['syllabus'];
  $subjects = $data['subjects'];
  $marks = $data['marks'];
  $studyinst = $data['institution'];
  $yearstudy = $data['year_of_study'];
  $gpa = $data['GPA'];
  $course = $data['course_name'];
  $continue = $data['continue_studies'];
  $studentbio = $data['student_bio'];
  $bursarred = $data['bursarred'];
  $bursary = $data['bursary'];
  $workback = $data['workback'];
  $website = $data['website'];

  //--------------------------Personal Details------------------------------//

  UpdateFirstName($student_id, $first_name, $mysqli);
  UpdateLastName($student_id, $last_name, $mysqli);
  UpdateDOB($student_id, $dob, $mysqli);
  UpdateProvince($student_id, $province, $mysqli);
  UpdateCity($student_id, $city, $mysqli);
  UpdateContact($student_id, $contact_number, $mysqli);
  UpdateNationality($student_id, $nationality, $mysqli);
  UpdateDisability($student_id, $disability, $mysqli);

  //--------------------------Academic Information--------------------------//
  if($currentacad == 'High School'){
    UpdateGrade($student_id, $grade, $mysqli);
    UpdateSyllabus($student_id, $syllabus, $mysqli);
    // subjects and marks will be added here //
    $ids = AllSubjects($student_id, $subjects, $mysqli);
    AllMarks($ids, $marks, $mysqli);
    $average = GetAverage($student_id, $mysqli);
    UpdateAverage($student_id, $average, $mysqli);
  }else{
    UpdateCourse($student_id, $course, $mysqli);
    UpdateStudyInst($student_id, $studyinst, $mysqli);
    UpdateYearStudy($student_id, $yearstudy, $mysqli);
    UpdateGPA($student_id, $gpa, $mysqli);
    UpdateContinue($student_id, $continue, $mysqli);
  }

  //-------------------------Other Information------------------------------//

  UpdateBio($student_id, $studentbio, $mysqli);
  UpdateBursarred($student_id, $bursarred, $mysqli);
  if ($burssared == '1') {
    UpdateBursaries($student_id, $bursaries, $mysqli);
  }
  UpdateWorkback($student_id, $workback, $mysqli);
  UpdateWebsite($student_id, $website, $mysqli);

  /*EditStudent($first_name, $last_name, $dob, $province, $city, $contact_number, $nationality, $disability, $student_id, $mysqli);
  AddEditCurrentAcad($student_id, $currentacad, $grade, $syllabus, $course, $studyinst, $yearstudy, $gpa, $continue, $mysqli);
  AddEditStudentBio($student_id, $studentbio, $mysqli);
  AddEditMisc($student_id, $bursarred, $bursary, $workback, $website, $mysqli);*/

	$u_id = GenerateUserID($student_id, 1);

	if (UpdateStudentID($student_id, $u_id, $mysqli)===TRUE){

	  if (AddToUsers($email, $u_id, $mysqli) === TRUE){
		echo "New user added successfully";
	  }
	}
    }
    else {
      echo "This email address already exists";
      echo "<script>window.location.href='db_input_test.html'</script>";

    }
  }
else{
	echo "Not Unique!";
}


function display(int $id, $mysqli){
	$sql = "SELECT * FROM student WHERE ID = '".$student_id."'";
	$result = $mysqli->query($sql);

	if ($result->num_rows>0){
		http_response_code(201);
		$row = $result->fetch_assoc();
    $Obj->name = $row["First_name"];
    $Obj->surname = $row["Last_name"];
    $Obj->email = $row["Email_address"];
    $Obj->dob = $row["Date_of_birth"];
    $Obj->validated = $row["Validated"];
    $Obj->nationality = $row["Nationality"];
    $Obj->contact_number = $row["Contact_number"];
    $Obj->city = $row["City"];
    $Obj->province = $row["Province"];
    $Obj->disability = $row["Disability"];
    $Obj->academic_Level = $row["Current_academic_level"];
    $Obj->grade = $row["Grade"];
    $Obj->syllabus = $row["Syllabus"];
    $Obj->average = $row["Average"];
    $Obj->course = $row["Currently_studying"];
    $Obj->studyinst = $row["Study_institution"];
    $Obj->yearstudy = $row["Year_of_study"];
    $Obj->gpa = $row["GPA"];
    $Obj->continue = $row["Continue_studies"];
    $Obj->bio = $row["Description_of_student"];
    $Obj->website = $row["Website"];
		return $Obj;
	}
	else{
		http_response_code(422);
		return null;
	}
}

 ?>
