<?php
include_once "math_u_db_connection.php";


$input = file_get_contents('php://input');
$data = json_decode($input, true);


class editBursary{
    public $message;
}

/*
//--------------for test puposes-------------------------
$company_id = "1";
$bursary_id = "104";
$bursary_name = "Special Bursary";
$workback ="0";
$bursaryEnddate = "2021-09-27";
$minimumAge = "13";
$maximumAge ="20";
$bursaryDuration ="2";
$requiredMarks = "73";
$bursaryEmail ="special@gmail.com";
$bursaryCommunicationDate = "2021-10-27";
$bursaryType = "Bursary";
$academicLevel = "High School";
$fieldOfstudy = "";
$yearOfstudy = "0";
$rsa_Citizen = "1";
$financialAssistance ="0";
$studyFurther ="0";
$disability = "1";
$province = "Gauteng";
$bursary_description = "This is a special bursary haha.";
$isVisble= "1";
$covers = ["Tuition","Meals"];
*/
//--------------end test purposes--------------------------

//Editing variables
$company_id = $data["company_id"];
$bursary_id = $data["bursary_id"];
$bursary_name = $data["bursary_name"];
$workback =$data["WB_duration"] ;
$bursaryEnddate = $data["closing_date"];
$minimumAge = $data["min_age"];
$maximumAge =$data["max_age"] ;
$bursaryDuration = $data["bursary_duration"];
$requiredMarks = $data["min_average"];
$bursaryEmail = $data["email_address"];
$bursaryCommunicationDate = $data["shortlist_date"];
$bursaryType = $data["bursary_type"];
$academicLevel = $data["academic_level"];
$fieldOfstudy = $data["study_field"];
$yearOfstudy = $data["minimum_year_required"];
$rsa_Citizen = $data["RSA_citizen"];
$financialAssistance =$data["financial_need"];
$studyFurther =$data["study_further"];
$disability = $data["disability"];
$province = $data["province"];
$covers = $data["bursary_covers"];
$bursary_description = $data["bursary_description"];
$isVisble= $data["isVisible"];


//We gonna UPDATE everything in the table with what was sent from front end, 
//That is even unchanged variables, we will overwrite them.


//Main Bursary
$sql = "UPDATE bursaries SET Bursary_Name = '$bursary_name', Bursary_Type = '$bursaryType',WB_Duration ='$workback',Closing_Date = '$bursaryEnddate',
Minimum_Age = $minimumAge, Maximum_Age = '$maximumAge',Academic_Level = '$academicLevel',Study_field ='$fieldOfstudy', Minimum_Year_Of_Study = '$yearOfstudy',
Bursary_Duration = '$bursaryDuration', Minimum_Average= '$requiredMarks',RSA_Citizen=$rsa_Citizen,Financial_Need = '$financialAssistance', Study_Further=$studyFurther,
Disability='$disability', Province='$province',Email_Address='$bursaryEmail',Shortlist_Date='$bursaryCommunicationDate', isVisible = '$isVisble',Description ='$bursary_description'
WHERE Bursary_ID =$bursary_id AND Company_ID = $company_id";

$result = $mysqli->query($sql);


//What the bursary covers for

$result1 = $covers;
$bursary_covers="";
foreach($result1 as $bursary){
    $bursary_covers.= $bursary.",";
}

$sql2 = "UPDATE bursary_covers SET Bursary_Covers='$bursary_covers' WHERE Bursary_ID = $bursary_id";

$result2 = $mysqli->query($sql2);


if($result AND $result2){
    $updateBursary = new editBursary();
    $updateBursary -> $message ="Success!";
    echo json_encode($updateBursary);

}else{
    $updateBursary = new editBursary();
    $updateBursary -> $message ="Error: Failed To Update Bursary!";
    echo json_encode($updateBursary);
}


?>