<?php
include 'math_u_db_connection.php';
include 'all_classes.php';

$input = '{
    "bursary": {
        "company_id": 14,
        "bursary_id": 12, 
        "bursary_name": "Help out",
        "bursary_type": "Full Bursary",
        "bursary_description": "This is a bursary",
        "WB_duration": 0,
        "min_age": 13,
        "max_age": 26,
        "academic_level": "High School",
        "study_field": "",
        "minimum_year_required": 0,
        "min_average": 76,
        "RSA_citizen": true,
        "financial_need": false,
        "study_further": true,
        "disability": false,
        "province": "Gauteng",
        "bursary_covers": [
            "Accommodation Fees",
            "Meals",
            "Books Allowance",
        ],
        "closing_date": "2021-12-16",
        "shortlist_date": "2021-12-20",
        "email_address": "name@gmail.com",
        "bursary_duration": 2,
        "isVisible": true
        "Comapny":{
            "company_id": "14",
            "company_name": "Google",
            "company_logo": "",
            "company_industry": "Banking, Finance, Insurance, Stockbroking",
            "company_description": "",
            "company_URL": "",
            "number_of_reports": "0"
        }
    }
    "Bursary_ID": "12",
    "Student_ID": "1",
    "Status": "Pending",
    "Application_Date": --> filled by backend
}';
//$input = file_get_contents('php://input');
$data = json_decode($input, true);
$bursary_id = $data["Bursary_ID"];
$student_id = $data["Student_ID"];


 $new_user = new all_users();
 
if (isNewApplicant($bursary_id, $student_id, $mysqli)==TRUE){
	if (AddStudent($bursary_id, $student_id, $mysqli)){
		$new_user->message = "Success! You have successfully applied for your bursary.";
		echo json_encode($new_user);
	}else{
		$new_user->message = "Error! Could not apply for bursary. Try again.";
		echo json_encode($new_user);
	}
}else {
	$new_user->message = "You've already applied for this bursary.";
	echo json_encode($new_user);
}


//----------------------------------------------------------------------------------------------------------------
function isNewApplicant($bursary_id, $student_id, $mysqli){
	$sql= "SELECT * FROM student_bursaries WHERE Student_ID=$student_id AND Bursary_ID=$bursary_id";
	$result = $mysqli->query($sql);
	if ($result->num_rows > 0){
		return true;
	}else{
		return false;
	}
}
function AddStudent($Bursary_ID, $Student_ID, $mysqli){
	$date = date("Y-m-d");
	$sql = "Insert Into student_bursaries (Bursary_ID, Student_ID, Application_Date) values ($Bursary_ID, $Student_ID, '$date')";
	if($mysqli->query($sql) === TRUE){
		return true;
    }
	else{
		return false;
	}

}

?>