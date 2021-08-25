<?php
include 'all_classes.php';
include 'math_u_db_connection.php';
//GET APPLICANTS 
$input = '{"company_id": 0,
        "bursary_name": "Retirement",
        "bursary_type": "Work Back",
        "bursary_description": "This is a good bursary",
		"bursary_id":1,
        "WB_duration": 4,
        "min_age": 13,
        "max_age": 26,
        "academic_level": "Undergraduate",
        "study_field": "Law",
        "minimum_year_required": 2,
        "min_average": 76,
        "RSA_citizen": true,
        "financial_need": false,
        "study_further": false,
        "disability": true,
        "province": "Gauteng",
        "bursary_covers": [
            "Accommodation Fees",
            "Meals",
            "Books Allowance",
            "Transport"
        ],
        "closing_date": "2021-11-16",
        "shortlist_date": "2021-11-20",
        "email_address": "name@gmail.com",
        "bursary_duration": 2,
        "isVisible": true
      }';
//$input = file_get_contents('php://input');
$data = json_decode($input, true);
$bursary_id = $data["bursary_id"];
$Applicants = GetApplicants($busary_id, $mysqli);
echo json_encode($Applicants);
//----------------------------------------------------
//LIST OF APPLICANTS
//---------------------------------------------------


//=================================================
function GetApplicants($bursary_id, $mysqli){
	$sql = "SELECT * FROM student_bursaries WHERE Bursary_ID=$bursary_id";
	$result = $mysqli->query($sql);
	
	$student = [];
	$counter = 0;
	
	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			$student[$counter]=getStudent($row["Student_ID"], $mysqli);
			$counter = $counter+1;
		}
		return $student;
		
	}else return null;
}

function getStudent($student_id, $mysqli){
	$sql = "SELECT * FROM student WHERE ID=$student_id";
	$result = $mysqli->query($sql);
	
	if ($result->num_rows > 0){
		$row = $result->fetch_assoc();
	
		$user = new student($row["ID"], $row["First_name"], $row["Last_name"], $row["Date_of_birth"], $row["Email_address"], $row["Validated"], $row["Nationality"], $row["Contact_number"], $row["City"], $row["Province"], $row["Disability"], $row["Current_academic_level"], $row["Grade"], $row["Syllabus"], $row["Average"], $row["Currently_studying"], $row["Year_of_study"], $row["Study_institution"], $row["Continue_studies"], $row["GPA"], $row["Description_of_student"], $row["Bursarred"], $row["Current_bursaries"], $row["Workback"], $row["Website"], $row["Number_of_reports"],$row["Banned"]);
		return $user;
	}
	else return null;
}

?>