<?php

//All the functions needed to add the student after registration
// After registration the hashed password will all ready be in the database
// Tables needed: student, students+marks, subjects
// Email address required on in first line to get student inserts ID (the auto ID value for the other functions)

include_once 'math_u_db_connection.php';
include_once 'math_u_registration.php';
include_once 'math_u_student_registration.php';
include_once 'math_u_editStudent_functions.php';


if(isset($_POST['email']) and isset($_POST['password'])){

  $email = $_POST['email'];
  $pass = $_POST['password'];
  $isUnique = isUniqueEmail($email, $mysqli);
  $hashed_pass = GenerateHashPassword($pass);

  if ($isUnique === TRUE){
      $student_id = AddStudent($email, $hashed_pass, $mysqli);
      echo "New student added successfully ".$student_id;
      if ($student_id > 0) {

	  $first_name = $_POST['first_name'];
	  $last_name = $_POST['last_name'];
	  $dob = $_POST['date_of_birth'];
	  $province = $_POST['province'];
	  $city = $_POST['city'];
	  $contact_number = $_POST['contact_number'];
	  $nationality = $_POST['nationality'];
	  $disability = $_POST['disability'];
	  $currentacad = $_POST['current_acad'];
	  $grade = $_POST['grade'];
	  $syllabus = $_POST['syllabus'];
    $subjects = $_POST['subjects'];
    $marks = $_POST['marks'];
	  $studyinst = $_POST['institution'];
	  $yearstudy = $_POST['year_of_study'];
	  $gpa = $_POST['GPA'];
	  $course = $_POST['course_name'];
	  $continue = $_POST['continue_studies'];
	  $studentbio = $_POST['student_bio'];
	  $bursarred = $_POST['bursarred'];
	  $bursary = $_POST['bursary'];
	  $workback = $_POST['workback'];
	  $website = $_POST['website'];

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
  }

function EditStudent($first_name, $last_name, $dob, $province, $city, $contact_number, $nationality, $disability, $student_id, $mysqli){

  $sql = "UPDATE student SET First_name = '$first_name', Last_name = '$last_name', Date_of_birth = '$dob', Province = '$province', City = '$city', Contact_number = '$contact_number', Nationality = '$nationality', Disability = '$disability' WHERE ID=$student_id";
  if (mysqli_query($mysqli, $sql)) {
   echo "Personal details updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function AddEditStudentBio($student_id, $studentbio, $mysqli){
  $sql = "UPDATE student SET Description_of_student = '$studentbio' WHERE ID = $student_id";
  if (mysqli_query($mysqli, $sql)) {
   echo "Bio updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function AddEditAcadHS($student_id, $currentacad, $grade, $syllabus, $mysqli){

  $sql = "UPDATE student SET Current_academic_level = '$currentacad', Grade = '$grade', Syllabus = '$syllabus' WHERE ID = $student_id";
  //$result = $mysqli->query($sql);
  if (mysqli_query($mysqli, $sql)) {
   echo "Academic information updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function AddEditAcadUP($student_id, $currentacad, $course, $studyinst, $yearstudy, $gpa, $continue, $mysqli){
    $sql = "UPDATE student SET Current_academic_level = '$currentacad', Currently_studying = '$course', Study_institution = '$studyinst', Year_of_study = '$yearstudy', GPA = '$gpa', Continue_studies = '$continue' WHERE ID =$student_id";
    //$result = $mysqli->query($sql);
    if (mysqli_query($mysqli, $sql)) {
 		echo "Academic information updated successfully !";
 	 } else {
 		echo "Error: " . $sql . "
 " . mysqli_error($mysqli);
 	 }
 }

function AddEditCurrentAcad($student_id, $currentacad, $grade, $syllabus, $course, $studyinst, $yearstudy, $gpa, $continue, $mysqli){
  if ($currentacad == 'High School'){
    return AddEditAcadHS($student_id, $currentacad, $grade, $syllabus, $mysqli);
  }

  if ($currentacad == 'Undergraduate' || $currentacad == 'Postgraduate') {

    return AddEditAcadUP($student_id, $currentacad, $course, $studyinst, $yearstudy, $gpa, $continue, $mysqli);
    }
  }

function AddEditMisc($student_id, $bursarred, $bursary, $workback, $website, $mysqli){

  $sql = "UPDATE student SET Bursarred = '$bursarred', Current_bursaries = '$bursary', Workback = '$workback', Website = '$website' WHERE ID = $student_id";
  if (mysqli_query($mysqli, $sql)) {
   echo "Misc updated successfully!";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function QueryStudents($email, $mysqli){
	//returns a row ->
	$email = strtolower($email);
	//echo 'Email: '.$email;
	$sql = "SELECT * FROM student WHERE Email_address = '".$email."'";
	$result = $mysqli->query($sql);
	//echo json_encode($result);
	$row = $result->fetch_assoc();
	return $row["ID"];
}

/*function Display($result){
	//Check results is not an empty array
	if ($result != null){
		echo json_encode($result);
	}
	else{
		echo "No Results Found";
	}
}
*/
 ?>
