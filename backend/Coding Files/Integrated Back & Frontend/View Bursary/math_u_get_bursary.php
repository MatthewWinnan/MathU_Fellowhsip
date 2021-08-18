<?php

include 'math_u_db_connection.php';
include 'all_classes.php';

/*$input = '{
	"comapny_id": 0,
	"company_name": "Google",
	"company_industry": "Legal",
	"comapny_logo": "",
	"company_description": "",
	"company_URL": "",
	"number_of_reports": 0
}';*/

//$input ='{"company_id":1}';
$input = file_get_contents('php://input');
$data = json_decode($input, true);

$company_id = $data["company_id"];
echo json_encode(GetBursaries($company_id, $mysqli));

//=========================================
function GetBursaries($comp_id, $mysqli){
	$sql = "SELECT * FROM bursaries WHERE Company_ID=$comp_id";
	$result = $mysqli->query($sql);
	
	$list = [];
	$counter = 0;
	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()) {
			//create new bursary 
			$newBursary = new bursary($row["Company_ID"], $row["Bursary_Name"], $row["Bursary_Type"], $row["WB_Duration"], $row["Closing_Date"], $row["Minimum_Age"], $row["Maximum_Age"], $row["Academic_Level"], $row["Study_field"], $row["Current_Year"], $row["Bursary_Duration"], $row["Minimum_Average"], $row["RSA_Citizen"], $row["Financial_Need"], $row["Study_Further"], $row["Disability"], $row["Province"], $row["Email_Address"], $row["Shortlist_Date"], $row["isVisible"], $row["Description"]);
			$newBursary->Company = GetCompanyClass($comp_id, $mysqli);
			$newBursary->bursary_id = $row["Bursary_ID"];
			//add to the array
			
			$newBursary->bursary_covers = GetBursaryCovers($row["Bursary_ID"], $mysqli);
			$newBursary->Applicants = GetApplicants($row["Bursary_ID"], $mysqli);
			//add to the array
			$list[$counter]= $newBursary;
			$counter = $counter+1;
		}
		return $list;
	}else return null;	
}
//=========================================
function GetCompanyClass($comp_id, $mysqli){
	$sql = "SELECT * FROM company WHERE Company_ID=$comp_id";
	$result = $mysqli->query($sql);
	
	if ($result->num_rows > 0){
		$row = $result->fetch_assoc();
		$newCompany = new company($row["company_id"], $row["company_logo"], $row["company_industry"], $row["company_description"], $row["company_URL"], $row["number_of_reports"], $row["company_name"]);
		return $newCompany;
	}else return null;
}

//===============================================
function GetBursaryCovers($bursary_id, $mysqli){
	$sql = "SELECT * FROM bursary_covers WHERE Bursary_ID=$bursary_id";
	$result = $mysqli->query($sql);
	
	$cover = array();
	$counter = 0;
	
	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			$cover[$counter]=$row["Bursary_Covers"];
			$counter = $counter+1;
		}
		return $cover;
		
	}else return null;
	
}

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