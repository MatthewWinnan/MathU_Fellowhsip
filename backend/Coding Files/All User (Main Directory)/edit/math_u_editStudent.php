<?php

//All the functions needed to add the student after registration
// After registration the hashed password will all ready be in the database
// Tables needed: student, students+marks, subjects
// Email address required on in first line to get student inserts ID (the auto ID value for the other functions)

//This takes place after login (isset(_$POST['email'])) will not be needed, login details will be stored the session

include_once 'math_u_db_connection.php';
include_once 'math_u_editStudent_functions.php';
include 'all_classes.php';
//include_once 'math_u_login.php';


if(isset($_POST['email'])){

  $email = $_POST['email'];

  $student_id = QueryStudents($email, $mysqli);

    //--------------------------Personal Details------------------------------//
	if (isset($_POST['first_name'])){
		$first_name = $_POST['first_name'];
		UpdateFirstName($student_id, $first_name, $mysqli);
	}
   if (isset($_POST['last_name'])){
	   $last_name = $_POST['last_name'];
	   UpdateLastName($student_id, $last_name, $mysqli);
   }
   if (isset($_POST['date_of_birth'])){
	   $dob = $_POST['date_of_birth'];
	   UpdateDOB($student_id, $dob, $mysqli);
   }
   if(isset($_POST['province'])){
	   $province = $_POST['province'];
	   UpdateProvince($student_id, $province, $mysqli);
   }
   if (isset($_POST['city'])){
	    $city = $_POST['city'];
	    UpdateCity($student_id, $city, $mysqli);
   }
   if (isset($_POST['contact_number'])){
	   $contact_number = $_POST['contact_number'];
	   UpdateContact($student_id, $contact_number, $mysqli);
   }
   if (isset($_POST['nationality'])){
	  $nationality = $_POST['nationality'];
	   UpdateNationality($student_id, $nationality, $mysqli);
   }
   if (isset($_POST['disability'])){
	   $disability = $_POST['disability'];
	   UpdateDisability($student_id, $disability, $mysqli);
   }

    //--------------------------Academic Information--------------------------//
	if (isset($_POST['current_acad'])){
		//--------------------------------
	  $currentacad = $_POST['current_acad'];
    UpdateAcadLevel($student_id, $currentacad, $mysqli);

		if($currentacad == 'High School'){

			if (isset($_POST['grade'])){
				$grade = $_POST['grade'];
				UpdateGrade($student_id, $grade, $mysqli);
			}

			if (isset($_POST['syllabus'])){
				 $syllabus = $_POST['syllabus'];
				UpdateSyllabus($student_id, $syllabus, $mysqli);
			}

		  // subjects and marks will be added here //
		  if (isset($_POST['subjects']) and isset($_POST['marks'])){
			  $marks = $_POST['marks'];
			  $subjects = $_POST['subjects'];
			  $ids = AllSubjects($student_id, $subjects, $mysqli);
			  AllMarks($ids, $marks, $mysqli);
		  }


		  $average = GetAverage($student_id, $mysqli);
		  UpdateAverage($student_id, $average, $mysqli);

		}else{

		  if (isset($_POST['institution'])){
			  $studyinst = $_POST['institution'];
			  UpdateStudyInst($student_id, $studyinst, $mysqli);
		  }
		  if (isset($_POST['course_name'])){
			  $course = $_POST['course_name'];
			  UpdateCourse($student_id, $course, $mysqli);
		  }

		  if (isset($_POST['year_of_study'])){
			  $yearstudy = $_POST['year_of_study'];
			  UpdateYearStudy($student_id, $yearstudy, $mysqli);
		  }

		  if (isset($_POST['GPA'])){
			  $gpa = $_POST['GPA'];
			  UpdateGPA($student_id, $gpa, $mysqli);
		  }

		  if (isset($_POST['continue_studies'])){
			  $continue = $_POST['continue_studies'];
			  UpdateContinue($student_id, $continue, $mysqli);
		  }

		}
	}
    //-------------------------Other Information------------------------------//
	if (isset($_POST['student_bio'])){
		$studentbio = $_POST['student_bio'];
		UpdateBio($student_id, $studentbio, $mysqli);
	}
	if (isset($_POST['bursarred'])){
		$bursarred = $_POST['bursarred'];
		UpdateBursarred($student_id, $bursarred, $mysqli);
		if ($bursarred == '1'){
			if (isset($_POST['bursary'])){
				$bursary = $_POST['bursary'];
				UpdateBursaries($student_id, $bursary, $mysqli);
			}
		}
	}

    if (isset($_POST['workback'])){
		$workback = $_POST['workback'];
		UpdateWorkback($student_id, $workback, $mysqli);
	}
    if (isset($_POST['website'])){
		$website = $_POST['website'];
		UpdateWebsite($student_id, $website, $mysqli);
	}

  UpdateValidated($student_id, $mysqli);

  $sql = "SELECT*FROM student WHERE ID = '".$student_id."'";
  $result = $mysqli->query($sql);

	if ($result->num_rows>0){
    $row = $result->fetch_assoc();
    $user = new all_users();
    $user->Student = new student($row["ID"], $row["First_name"], $row["Last_name"], $row["Date_of_birth"], $row["Email_address"], $row["Validated"], $row["Nationality"], $row["Contact_number"], $row["City"], $row["Province"],
     $row["Disability"], $row["Current_academic_level"], $row["Grade"], $row["Syllabus"], $row["Average"], $row["Currently_studying"], $row["Year_of_study"], $row["Study_institution"], $row["Continue_studies"], $row["GPA"], $row["Description_of_student"],
     $row["Bursarred"], $row["Current_bursaries"], $row["Workback"], $row["Website"], $row["Number_of_reports"],$row["Banned"]);

     Display($user);
   }
 }

 //=================================================
 //function to QueryStudents, returns a ID
 //================================================

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

//====================================================
//function this function echo results in JSON format
//====================================================

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
