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
      //Generate a Student object and send
      if ($student_id > 0) {



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
	   UpdateContact($student_id, $city, $mysqli);
   }
   if (isset($_POST['nationality'])){
	  $nationality = $_POST['nationality'];
	   UpdateNationality($student_id, $contact_number, $mysqli);
   }
   if (isset($_POST['disability'])){
	   $disability = $_POST['disability'];
	   UpdateDisability($student_id, $disability, $mysqli);
   }

    //--------------------------Academic Information--------------------------//
	if (isset($_POST['current_acad'])){
		//--------------------------------
	  $currentacad = $_POST['current_acad'];
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


		$u_id = GenerateUserID($student_id, 1);

		if (UpdateStudentID($student_id, $u_id, $mysqli)===TRUE){

		  if (AddToUsers($email, $u_id, $mysqli) === TRUE){
			echo "New user added successfully";
      echo json_encode(display($student_id, $mysqli));
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

function display($student_id, $mysqli){
	$sql = "SELECT * FROM student WHERE ID = $student_id AND IS NOT NULL";
	$result = $mysqli->query($sql);

	if ($result->num_rows>0){
    $Obj = new \stdClass();
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
	else return null;
}
 ?>
