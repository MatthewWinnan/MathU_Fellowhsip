<?php
//INCLUDE 
//----------------------------------------
include_once 'math_u_db_connection.php';
include_once 'all_classes.php';
include_once 'create_bursary_func.php';
//----------------------------------------
/*$input = '{
    "company_id": 0,
    "bursary_name": "Retirement",
    "bursary_type": "Work Back",
    "bursary_description": "This is a good bursary",
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
}';*/

$new_user = new all_users();
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if ($data["RSA_citizen"] == 1){
	$RSA_citizen = TRUE;
}
else $RSA_citizen= FALSE;

$WB_duration = $data["WB_duration"];//(integer)=
$academicLevel = $data["academic_level"];//=
$bursary_covers = $data["bursary_covers"];//(array)
$bursary_description = $data["bursary_description"];//(string)
$bursary_duration = $data["bursary_duration"];//(integer)=
$bursary_name = $data["bursary_name"];//(string)=
$bursary_type = $data["bursary_type"];//(string)=
$closing_date = $data["closing_date"];//(date)=
$company_id = $data["company_id"]; //(int)=

if ($data["disability"] == 1){
	$disability = TRUE;
}
else $disability = FALSE;
 
$email_address = $data["email_address"]; //(string) =


if ($data["financial_need"]==1){
	$financial_need = TRUE;//(boolean)=
}
else $financial_need = FALSE;



if ($data["isVisible"]==1){
	$isVisible = TRUE;//(boolean)
}
else $isVisible = FALSE;


$max_age = $data["max_age"];//(int)=
$min_age = $data["min_age"];//(int)=
$min_average = $data["min_average"];//(float)=
$minimum_year_required = $data["minimum_year_required"];//(int)=
$province = $data["province"];//(string)=
$shortlist_date = $data["shortlist_date"];//(date)=
$study_field = $data["study_field"];//(string)=

if ($data["study_further"]== 1){
	$study_further = TRUE;
}
else $study_further = FALSE;
//echo json_encode($study_further);

//ADD BURSARY
$result = createBursary($company_id, $bursary_name, $WB_duration, $closing_date, $min_age, $max_age,  $bursary_duration, $min_average, $email_address, $shortlist_date, $bursary_type, $academicLevel, $study_field, $minimum_year_required, $province,  json_encode($RSA_citizen) , json_encode($financial_need), json_encode($study_further), json_encode($disability), json_encode($isVisible), $bursary_description, $mysqli);

//ARRAY 
if ($result != 0 ){
	
	for ($x=0; $x < count($bursary_covers); $x++){
		//echo $bursary_covers[$x];
		coversFor($result, $bursary_covers[$x], $mysqli);
	}
	$new_user->message= "New Bursary Sucessfully Created!";
    echo json_encode($new_user);
}
else{
	$new_user->message= "SERVER ERROR! CONTACT SUPPORT.";
    echo json_encode($new_user);
}

?>