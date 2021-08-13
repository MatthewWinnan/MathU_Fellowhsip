<?php



function getProfileSumm() {

  //Specifying the correct timezone
  date_default_timezone_set ("Africa/Johannesburg");
  //dB Credentials
  $user='root';
  $pass='';

  //dB Name
  $dBName='math_u_fellows';

  //Establishing connection
  $mysqli = new mysqli('localhost', $user, $pass, $dBName);

  if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
  }

  $email = 'weare@theflash.com';
  $Academic_Level = 'HighSchool';

  if ($Academic_Level == 'HighSchool') {
    $row = array();
    $markrow = array();
    $sql1 = "SELECT `First_name`, `Last_name`, `City`,
    `Province`, `Description_of_student`, `Grade`, `Syllabus`,
    `Website` FROM `student` WHERE
    `Student_ID` = (SELECT `User_ID` FROM `all_users` WHERE `Email_address` = '$email')";


    $student_details = mysqli_query($mysqli,$sql1);
    $studentrow = mysqli_fetch_array($student_details,MYSQLI_ASSOC); //array storing student details
    // $row = mysqli_fetch_array($student_details);

    $sql2 = "SELECT `Subject_name`, `Mark` FROM `students_marks`
    WHERE `Student_ID` = (SELECT `User_ID` FROM `all_users` WHERE `Email_address` = '$email')";
    $student_marks = $mysqli->query($sql2);

    // $profile_summary = array($student_details, $student_marks);

    if($student_marks) {
        // Display the subjects and marks
        $p = 0;

      while($entry = mysqli_fetch_array($student_marks,MYSQLI_ASSOC)) {

          $markrow[$p] = $entry; //Appends the subject and mark into the $markrow array
          $p += 1;

          }
        // print_r($markrow);
        } else {
            $marks = new Marks();
            return $marks;
        }

      } else {

          $profile_summary = $mysqli->query("SELECT `First_name`, `Last_name`, `City`,
                                            `Province`, `Description_of_student`, `Study_institution`, `Currently_studying`, `Year_of_study`, `GPA`,
                                            `Website` FROM `student` WHERE
                                            `Student_ID` = (SELECT `User_ID` FROM `all_users` WHERE `Email_address` = '$email') ") ;
          $row = mysqli_fetch_array($profile_summary);
        }

      mysqli_close($mysqli);
        // mysqli_close($mysqli);

      // return print_r($row);

      $info = array($markrow,$studentrow);

      $summary = new ProfileSummary();
      $summary->Marks = $info[0];
      $summary->Profile = $info[1];

      return $summary; //

      // Should return array
    }

getProfileSumm();

 ?>
