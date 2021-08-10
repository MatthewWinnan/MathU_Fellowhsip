<?php

function getBursaries() {

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
$bursary_type = $_POST['bursary_type'];
$study_field = $_POST['study_field'];
$minimum_average = $_POST['minimum_average'];
$bursary_covers = $_POST['bursary_covers'];
$academic_level = $_POST['academic_level'];

$sql = "SELECT * FROM `bursaries`
WHERE `Bursary_Type` LIKE '$bursary_type'
AND `Academic_Level` LIKE '$academic_level'
AND `Study_field` LIKE '$study_field'
AND `Minimum_Average` >= '$minimum_average'
AND `Bursary_Covers` LIKE '$bursary_covers'";

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

 ?>
