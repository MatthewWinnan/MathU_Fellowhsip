<?php
//http://localhost/bursary/DeactivateBursary/math_u_deactivate_bursary.php
//include functions
include_once "math_u_db_connection.php";
include_once 'math_u_deactivate_bursary_function.php';


$input = file_get_contents('php://input');
/*$input = '{
    "bursary_id": "16",
    "company_id": "14",
    "bursary_name": "Special Bursary for CompEng",
    "bursary_type": "Full Bursary",
    "WB_duration": "0",
    "closing_date": "2021-09-27",
    "min_age": "25",
    "max_age": "40",
    "academic_level": "High School",
    "study_field": "Engineering",
    "minimum_year_required": "3",
    "bursary_duration": "2",
    "min_average": "74",
    "RSA_citizen": false,
    "financial_need": true,
    "study_further": true,
    "disability": false,
    "province": "Gauteng",
    "email_address": "special@gmail.com",
    "shortlist_date": "2021-10-27",
    "isVisible": false,
    "bursary_description": "This is a special bursary for Computer Engineers.",
    "bursary_covers": [
        "Tuition,Meals,Books Allowance,",
        "Tuition,Meals,Books Allowance,"
    ],
    "Company": {
        "company_id": "14",
        "company_name": "Google",
        "company_logo": "",
        "company_industry": "Banking, Finance, Insurance, Stockbroking",
        "company_description": "",
        "company_URL": "",
        "number_of_reports": "0"
    },
    "Applicants": [],
    "bursary_status": "Open"
}';*/
$data = json_decode($input, true);

//Get Bursary Name to Query bursaries table.
$bursaryName = $data['bursary_name'];

//Get Bursary Status to deactivate the bursary.
$bursaryStatus = $data['isVisible']; 


// For test purposes
/*
$bursaryName = "BP";
$bursaryStatus = "false";
*/

//Bursary Status class
class BursaryStatus{
    public $message;
}

//Run deactivating query
$result = DeactivateBursary($bursaryName,$bursaryStatus,$mysqli);

//Check if query was successful

if($result){
    $deactivated = new BursaryStatus();
    $deactivated -> message ="Success!";
    echo json_encode($deactivated);
} else {
    $deactivated = new BursaryStatus();
    $deactivated -> message ="Bursary Not Deactivated!";
    echo json_encode($deactivated);   
}

?>