<?php
//include 
include 'math_u_db_connection.php';
include 'math_u_editSponsor_functions.php';
include 'all_classes.php';

$input = '{
    "Student": {
        "id": "1",
        "first_name": "Iris",
        "last_name": "West-Allen",
        "date_of_birth": "2021-08-06",
        "email_address": "weare@theflash.com",
        "validated": true,
        "nationality": false,
        "contact_number": "+1 555 555 270",
        "city": "Central City",
        "province": "",
        "disability": false,
        "current_academic_level": "PostGrad",
        "grade": null,
        "syllabus": null,
        "average": "75",
        "currently_studying": null,
        "year_of_study": null,
        "study_institution": null,
        "continue_studies": null,
        "gpa": null,
        "description_of_student": "",
        "bursarred": false,
        "current_bursaries": null,
        "workback": "0",
        "website": "flash4fast.com",
        "number_of_reports": "0",
        "banned": false,
        "Students_marks": []
    },
    "Bursary_ID": "16",
    "Student_ID": "1",
    "Status": "Accepted",
    "Application_Date": "2021-08-25"
}';
//$input = file_get_contents('php://input');
$data = json_decode($input, true);
$id = $data["Student"]["id"];
$b_id = $data["Bursary_ID"];
$new_user = new all_users();


if (AcceptApplicant($id, $b_id, $mysqli)){
	$new_user->message = "Success! Student has been accepted!";
	echo json_encode($new_user);
}
else{
	$new_user->message = "Error! Student could not be accepted. Try again.";
	echo json_encode($new_user);
}

?>