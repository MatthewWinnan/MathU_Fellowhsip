<?php

function getBursaries() {

  $input = file_get_contents('php://input');
  $data = json_decode($input, true);

  date_default_timezone_set ("Africa/Johannesburg");
  //dB Credentials
  $user='root';
  $pass='';

  //dB Name
  $dBName='math_u_fellows'; // Tested using math_u_fellows_all_updated_tables on my machine

  //Establishing connection
  $mysqli = new mysqli('localhost', $user, $pass, $dBName);

  if ($mysqli->connect_errno) {
      echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }

// filters the bursary table
$student_id = $data['student_id'];
$bursary_type = $data['bursary_type'];
$study_field = $data['study_field'];
$minimum_average = $data['minimum_average'];
$province = $data['province'];
$academic_level = $data['academic_level'];

$sql = "SELECT * FROM `bursaries`
WHERE `Bursary_Type` LIKE '$bursary_type'
AND `Academic_Level` LIKE '$academic_level'
AND `Study_field` LIKE '$study_field'
AND `Minimum_Average` >= '$minimum_average'
AND `Province` LIKE '$province'";

$bursaryrow = array();
$result = $mysqli->query($sql);

if($result){
  $p = 0;

  while($entry = mysqli_fetch_array($result,MYSQLI_ASSOC)) {
    $bursaryrow[$p] = $entry;
    $p += 1;
}

} elseif(!$result) {
  echo "0 matches found.";
}


mysqli_close($mysqli);

return print_r($bursaryrow);
  // Should Return an array
}

getBursaries();

function storeFilters(){

  $user='root';
  $pass='';
  $dBName='math_u_fellows';
  $mysqli = new mysqli('localhost', $user, $pass, $dBName);

  $input = file_get_contents('php://input');
  $data = json_decode($input, true);

  // $bursary_type = $_POST['bursary_type'];
  // $study_field = $_POST['study_field'];
  // $minimum_average = $_POST['minimum_average'];
  // $province = $_POST['province'];
  // $academic_level = $_POST['academic_level'];
  // $student_id = preg_replace("/[a-zA-z]/",'',$_POST['student_id']);

  $bursary_type = $data['bursary_type'];
  $study_field = $data['study_field'];
  $minimum_average = $data['minimum_average'];
  $province = $data['province'];
  $academic_level = $data['academic_level'];
  $Student_ID = preg_replace("/[a-zA-z]/",'',$data['student_id']);

  $dup = $mysqli->query("SELECT * FROM `filters` WHERE `Student_ID` = '$student_id'");
  if(mysqli_num_rows($dup)==0){

  $filters_arr = array($bursary_type, $study_field, $minimum_average, $province, $academic_level);

  foreach ($filters_arr as $key) {
    $sql = "INSERT INTO `filters`(`Student_ID`, `Filter`) VALUES ('$student_id', '$key')";
    $entry = $mysqli->query($sql);

  }
// } else {
  // echo "Filters exist for student, please update them.";
// }
}

storeFilters();

 ?>
