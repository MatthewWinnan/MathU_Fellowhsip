<?php

//----------------------------------------------------------------------------//
//                            PERSONAL DETAILS                                //
//----------------------------------------------------------------------------//

function UpdateFirstName($student_id, $first_name, $mysqli){
  $sql = "UPDATE student SET First_name = '$first_name' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "First name updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateLastName($student_id, $last_name, $mysqli){
  $sql = "UPDATE student SET Last_name = '$last_name' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Last name updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateDOB($student_id, $dob, $mysqli){
  $sql = "UPDATE student SET Date_of_birth = '$dob' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Date of birth updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateProvince($student_id, $province, $mysqli){
  $sql = "UPDATE student SET Province = '$province' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Province updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateCity($student_id, $city, $mysqli){
  $sql = "UPDATE student SET City = '$city' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "City updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateContact($student_id, $contact_number, $mysqli){
  $sql = "UPDATE student SET Contact_number = '$contact_number' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Contact number updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateNationality($student_id, $nationality, $mysqli){
  $sql = "UPDATE student SET Nationality = '$nationality' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Nationality updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateDisability($student_id, $disability, $mysqli){
  $sql = "UPDATE student SET Disability = '$disability' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Disability updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

//----------------------------------------------------------------------------//
//                            ACADEMIC INFORMATION                            //
//----------------------------------------------------------------------------//

function UpdateAcadLevel($student_id, $current_acad, $mysqli){
  $sql = "UPDATE student SET Current_academic_level = '$current_acad' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Current academic level updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

//----------------------------------------------------------------------------//
//                           HIGH SCHOOL STUDENT                              //
//----------------------------------------------------------------------------//

function UpdateGrade($student_id, $grade, $mysqli){
  $sql = "UPDATE student SET Grade = '$grade' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Grade updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateSyllabus($student_id, $syllabus, $mysqli){
  $sql = "UPDATE student SET Syllabus = '$syllabus' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Syllabus updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

//----------------------------------------------------------------------------//
//                           ADD A SINGLE SUBJECT                             //
//----------------------------------------------------------------------------//

function AddSubject($student_id, $subject, $mysqli){

  $sql = "INSERT INTO subjects_marks (Student_ID, Subject_name) VALUES ('$student_id', '$subject')";
  if($mysqli->query($sql) === TRUE){
    return $mysqli->insert_id;
  }
  else{
    return 0;
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
  if (mysqli_query($mysqli, $sql)) {
   echo "Mark updated successfully!<br>";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

//$ids = AllSubjects($student_id, $subjects, $mysqli)

function AllMarks($ids, $marks, $mysqli){
  $i = 0;
  foreach (array_filter($marks) as $mark) {
    UpdateMark($ids[$i], $mark, $mysqli);
    $i+=1;
  }
}

function UpdateSubject($sub_id, $subject, $mysqli){

  $sql = "UPDATE subjects_marks SET Subject_name = '$subject' WHERE ID = '".$sub_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Subject updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
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
  if (mysqli_query($mysqli, $sql)) {
   echo "Average updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

//----------------------------------------------------------------------------//
//                           TERTIARY STUDENT                                 //
//----------------------------------------------------------------------------//

function UpdateCourse($student_id, $course, $mysqli){
  $sql = "UPDATE student SET Currently_studying = '$course' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Course updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateYearStudy($student_id, $yearstudy, $mysqli){
  $sql = "UPDATE student SET Year_of_study = '$yearstudy' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Year of study updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateStudyInst($student_id, $studyinst, $mysqli){
  $sql = "UPDATE student SET Study_institution = '$study_inst' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Study Institution updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateContinue($student_id, $continue, $mysqli){
  $sql = "UPDATE student SET Continue_studies = '$continue' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "Contiue studies updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateGPA($student_id, $gpa, $mysqli){
  $sql = "UPDATE student SET GPA = '$gpa' WHERE ID = '".$student_id."'";
  if (mysqli_query($mysqli, $sql)) {
   echo "GPA updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

//----------------------------------------------------------------------------//
//                            OTHER INFORMATION                               //
//----------------------------------------------------------------------------//


function UpdateBio($student_id, $studentbio, $mysqli){
  $sql = "UPDATE student SET Description_of_student = '$studentbio' WHERE ID = $student_id";
  if (mysqli_query($mysqli, $sql)) {
   echo "Bio updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateBursarred($student_id, $bursarred, $mysqli){
  $sql = "UPDATE student SET Bursarred = '$bursarred' WHERE ID = $student_id";
  if (mysqli_query($mysqli, $sql)) {
   echo "Bursarred updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateBursaries($student_id, $bursary, $mysqli){
  $sql = "UPDATE student SET Current_bursaries = '$bursary' WHERE ID = $student_id";
  if (mysqli_query($mysqli, $sql)) {
   echo "Current bursaries updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateWorkback($student_id, $workback, $mysqli){
  $sql = "UPDATE student SET Workback = '$workback' WHERE ID = $student_id";
  if (mysqli_query($mysqli, $sql)) {
   echo "Workback updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

function UpdateWebsite($student_id, $website, $mysqli){
  $sql = "UPDATE student SET Website = '$website' WHERE ID = $student_id";
  if (mysqli_query($mysqli, $sql)) {
   echo "Website updated successfully !";
  } else {
   echo "Error: " . $sql . "
" . mysqli_error($mysqli);
  }
}

 ?>
