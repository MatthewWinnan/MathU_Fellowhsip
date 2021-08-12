<?php

//----------------------------------------------------------------------------//
//                            PERSONAL DETAILS                                //
//----------------------------------------------------------------------------//

function UpdateFirstName($student_id, $first_name, $mysqli){
  $sql = "UPDATE student SET First_name = '$first_name' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateLastName($student_id, $last_name, $mysqli){
  $sql = "UPDATE student SET Last_name = '$last_name' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateDOB($student_id, $dob, $mysqli){
  $sql = "UPDATE student SET Date_of_birth = '$dob' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateProvince($student_id, $province, $mysqli){
  $sql = "UPDATE student SET Province = '$province' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateCity($student_id, $city, $mysqli){
  $sql = "UPDATE student SET City = '$city' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateContact($student_id, $contact_number, $mysqli){
  $sql = "UPDATE student SET Contact_number = '$contact_number' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateNationality($student_id, $nationality, $mysqli){
  $sql = "UPDATE student SET Nationality = '$nationality' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateDisability($student_id, $disability, $mysqli){
  $sql = "UPDATE student SET Disability = '$disability' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

//----------------------------------------------------------------------------//
//                            ACADEMIC INFORMATION                            //
//----------------------------------------------------------------------------//

function UpdateAcadLevel($student_id, $current_acad, $mysqli){
  $sql = "UPDATE student SET Current_academic_level = '$current_acad' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

//----------------------------------------------------------------------------//
//                           HIGH SCHOOL STUDENT                              //
//----------------------------------------------------------------------------//

function UpdateGrade($student_id, $grade, $mysqli){
  $sql = "UPDATE student SET Grade = '$grade' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateSyllabus($student_id, $syllabus, $mysqli){
  $sql = "UPDATE student SET Syllabus = '$syllabus' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

//----------------------------------------------------------------------------//
//                           ADD A SINGLE SUBJECT                             //
//----------------------------------------------------------------------------//

function AddSubject($student_id, $subject, $mysqli){

  $sql = "INSERT INTO subjects_marks (Student_ID, Subject_name) VALUES ('$student_id', '$subject')";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

//----------------------------------------------------------------------------//
//                            ADD ALL SUBJECTS                                //
//----------------------------------------------------------------------------//

function AllSubjects($student_id, $subjects, $mysqli){ //takes in an array of subjects from form
  $ids = [];
  foreach (array_filter($subjects) as $subject) {
      $last_id = AddSubject($student_id, $subject, $mysqli);
      array_push($ids, $last_id);
    }
    echo "Subjects added successfully! <br>";
    return $ids;
}



//----------------------------------------------------------------------------//
//                           ADD A SINGLE MARK                                //
//----------------------------------------------------------------------------//

function UpdateMark($sub_id, $mark, $mysqli){
  $sql = "UPDATE subjects_marks SET Mark = '$mark' WHERE ID = '".$sub_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

//$ids = AllSubjects($student_id, $subjects, $mysqli)

function AllMarks($ids, $marks, $mysqli){
  $i = 0;
  foreach (array_filter($marks) as $mark) {
    UpdateMark($ids[$i], $mark, $mysqli);
    $i+=1;
  }
  echo "Marks added successfully! <br>";
}

function UpdateSubject($sub_id, $subject, $mysqli){

  $sql = "UPDATE subjects_marks SET Subject_name = '$subject' WHERE ID = '".$sub_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}


function GetAverage($student_id, $mysqli){
  $sql = "SELECT AVG(Mark) AS average FROM subjects_marks WHERE Student_ID = '".$student_id."'";
  $result = $mysqli->query($sql);
  $row = mysqli_fetch_assoc($result);
  $average = $row['average'];
  return $average;
}


function UpdateAverage($student_id, $average, $mysqli){
  $sql = "UPDATE student SET Average = '$average' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}


//----------------------------------------------------------------------------//
//                           TERTIARY STUDENT                                 //
//----------------------------------------------------------------------------//

function UpdateCourse($student_id, $course, $mysqli){
  $sql = "UPDATE student SET Currently_studying = '$course' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateYearStudy($student_id, $yearstudy, $mysqli){
  $sql = "UPDATE student SET Year_of_study = '$yearstudy' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateStudyInst($student_id, $studyinst, $mysqli){
  $sql = "UPDATE student SET Study_institution = '$study_inst' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateContinue($student_id, $continue, $mysqli){
  $sql = "UPDATE student SET Continue_studies = '$continue' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateGPA($student_id, $gpa, $mysqli){
  $sql = "UPDATE student SET GPA = '$gpa' WHERE ID = '".$student_id."'";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

//----------------------------------------------------------------------------//
//                            OTHER INFORMATION                               //
//----------------------------------------------------------------------------//


function UpdateBio($student_id, $studentbio, $mysqli){
  $sql = "UPDATE student SET Description_of_student = '$studentbio' WHERE ID = $student_id";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateBursarred($student_id, $bursarred, $mysqli){
  $sql = "UPDATE student SET Bursarred = '$bursarred' WHERE ID = $student_id";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateBursaries($student_id, $bursary, $mysqli){
  $sql = "UPDATE student SET Current_bursaries = '$bursary' WHERE ID = $student_id";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

function UpdateWorkback($student_id, $workback, $mysqli){
  $sql = "UPDATE student SET Workback = '$workback' WHERE ID = $student_id";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}
function UpdateWebsite($student_id, $website, $mysqli){
  $sql = "UPDATE student SET Website = '$website' WHERE ID = $student_id";
  if($mysqli->query($sql)=== TRUE){
		return true;
	}
	else{
		return false;
	}
}

 ?>
