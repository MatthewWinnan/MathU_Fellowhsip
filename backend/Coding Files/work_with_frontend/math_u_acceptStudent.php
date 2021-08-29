<?php
//include 
include_once 'math_u_db_connection.php';
include_once 'math_u_editSponsor_function.php';
include_once 'all_classes.php';

/*$input = '{
    "Student": {
        "id": "1",
        "student_id": "U001",
        "first_name": "Iris",
        "last_name": "West-Allen",
        "date_of_birth": "2000-08-06",
        "email_address": "weare@theflash.com",
        "validated": true,
        "nationality": false,
        "contact_number": "+1555555270",
        "city": "Central City",
        "province": "",
        "disability": false,
        "current_academic_level": "High School",
        "grade": "12",
        "syllabus": "IEB",
        "average": "77",
        "currently_studying": null,
        "year_of_study": null,
        "study_institution": null,
        "continue_studies": null,
        "gpa": null,
        "description_of_student": "I am a good student.",
        "bursarred": false,
        "current_bursaries": null,
        "workback": "5",
        "website": "flash4fast.com",
        "number_of_reports": "0",
        "banned": false,
        "Students_marks": []
    },
    "Bursary_ID": "16",
    "Student_ID": "1",
    "Status": "Pending",
    "Application_Date": "2021-08-25"
}';*/
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$s_id = $data["Student_ID"];
$b_id = $data["Bursary_ID"];
$new_user = new all_users();


if (AcceptApplicant($s_id, $b_id, $mysqli)){
	$new_user->message = "Success! Student has been accepted!";
	echo json_encode($new_user);
}
else{
	$new_user->message = "Error! Student could not be accepted. Try again.";
	echo json_encode($new_user);
}

?>