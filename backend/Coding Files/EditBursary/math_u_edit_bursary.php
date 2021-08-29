<?php
include_once "math_u_db_connection.php";
include_once "math_u_edit_covers.php";


$input = file_get_contents('php://input');
/*$input = '{
    "company_id": "14",
    "bursary_name": "Special Bursary for CompEng",
    "bursary_type": "Bursary",
    "bursary_description": "This is a special bursary.",
    "WB_duration": "0",
    "min_age": "13",
    "max_age": "20",
    "academic_level": "Undergraduate",
    "study_field": "Engineering",
    "minimum_year_required": 2,
    "min_average": 91,
    "RSA_citizen": true,
    "financial_need": false,
    "study_further": false,
    "disability": true,
    "province": "",
    "bursary_covers": [
        "Tuition",
        "Meals"
    ],
    "closing_date": "2021-09-27",
    "shortlist_date": "2021-10-27",
    "email_address": "special@gmail.com",
    "bursary_duration": "2",
    "isVisible": true,
    "bursary_id": "16",
    "bursary_status": "Open"
}';*/
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
if ($data["RSA_citizen"]==true){
	$rsa_Citizen = 1;//(boolean)
}
else $rsa_Citizen = 0;

if ($data["financial_need"]==true){
	$financialAssistance = 1;//(boolean)
}
else $financialAssistance = 0;

if ($data["disability"]==true){
	$disability = 1;//(boolean)
}
else $disability = 0;

if ($data["study_further"]==true){
	$studyFurther = 1;//(boolean)
}
else $studyFurther = 0;

$province = $data["province"];
$bursary_covers = $data["bursary_covers"];
$bursary_description = $data["bursary_description"];
//$isVisble= $data["isVisible"];


//We gonna UPDATE everything in the table with what was sent from front end, 
//That is even unchanged variables, we will overwrite them.


//Main Bursary
$sql = "UPDATE bursaries SET Bursary_Name='$bursary_name', Bursary_Type='$bursaryType', WB_Duration=$workback, Closing_Date='$bursaryEnddate', 
	Minimum_Age=$minimumAge, Maximum_Age=$maximumAge, Academic_Level='$academicLevel', Study_field='$fieldOfstudy', Current_Year='$yearOfstudy', 
	Bursary_Duration=$bursaryDuration, Minimum_Average=$requiredMarks, RSA_Citizen=$rsa_Citizen, Financial_Need=$financialAssistance, 
	Study_Further=$studyFurther, Disability=$disability, Province='$province', Email_Address='$bursaryEmail', Shortlist_Date='$bursaryCommunicationDate', 
	Description='$bursary_description' WHERE Bursary_ID=$bursary_id AND Company_ID=$company_id";

$result = $mysqli->query($sql);


//What the bursary covers for
$result1 = $covers;
$bursary_covers="";
foreach($result1 as $bursary){
    $bursary_covers.= $bursary.",";
}

$sql2 = "UPDATE bursary_covers SET Bursary_Covers='$bursary_covers' WHERE Bursary_ID=$bursary_id";

$result2 = $mysqli->query($sql2);


if($result){
    $updateBursary = new editBursary();
    $updateBursary->message ="Success!";
    echo json_encode($updateBursary);

}else{
    $updateBursary = new editBursary();
    $updateBursary->message ="Error: Failed To Update Bursary!";
    echo json_encode($updateBursary);
}

//=================================FOR EDIT COVERS====================================================================

$newTuition="";
$newRegistrationFees="";
$newAccomodationFees="";
$newTranport ="";
$newLaptop="";
$newMeals ="";
$newBooksAllowance="";



//We check the array sent to back and and update the new variable accordingly
//If the array does contain a certain value we append the variable
//IF it does not contain the value we append invalid

// ---------------------Check Tuition-------------------------------
$i = 0;
while($i <count($bursary_covers) AND empty($newTuition)){
    
    if($bursary_covers[$i] == "Tuition"){
        $newTuition .= $bursary_covers[$i];
    }else{
        $newTuition .= "invalid";
    }
    $i++;
}

// ---------------------Registration Fees-------------------------------
$i = 0;
while($i <count($bursary_covers) AND empty($newRegistrationFees)){
    
    if($bursary_covers[$i] == "Registration Fees"){
        $newRegistrationFees .= $bursary_covers[$i];
    }else{
        $newRegistrationFees .= "invalid";
    }
    $i++;
}

// ---------------------Accomodation Fees-------------------------------
$i = 0;
while($i <count($bursary_covers) AND empty($newAccomodationFees)){
    
    if($bursary_covers[$i] == "Accommodation Fees"){
        $newAccomodationFees .= $bursary_covers[$i];
    }else{
        $newAccomodationFees .= "invalid";
    }
    $i++;
}

// ---------------------Transport-------------------------------
$i = 0;
while($i <count($bursary_covers) AND empty($newTranport)){
    
    if($bursary_covers[$i] == "Transport"){
        $newTranport .= $bursary_covers[$i];
    }else{
        $newTranport .= "invalid";
    }
    $i++;
}

// ---------------------Laptop-------------------------------
$i = 0;
while($i <count($bursary_covers) AND empty($newLaptop)){
    
    if($bursary_covers[$i] == "Laptop"){
        $newLaptop .= $bursary_covers[$i];
    }else{
        $newLaptop .= "invalid";
    }
    $i++;
}

// ---------------------Meals-------------------------------
$i = 0;
while($i <count($bursary_covers) AND empty($newMeals)){
    
    if($bursary_covers[$i] == "Meals"){
        $newMeals .= $bursary_covers[$i];
    }else{
        $newMeals .= "invalid";
    }
    $i++;
}

// ---------------------Books Allowance-------------------------------
$i = 0;
while($i <count($bursary_covers) AND empty($newBooksAllowance)){
    
    if($bursary_covers[$i] == "Books Allowance"){
        $newBooksAllowance .= $bursary_covers[$i];
    }else{
        $newBooksAllowance .= "invalid";
    }
    $i++;
}

///====================================================================================================
// CHECKING WITH DATABASE NOW AND COMPARING

///====================================================================================================


//-----------------------------We check Tuition---------------------------------------------------------
$whatWeCover= "Tuition";
$oldTuition = editCovers($bursary_id,$whatWeCover,$mysqli);

if($oldTuition == $newTuition){ //Did not Update
    //we do nothing
} elseif($oldTuition=="Unavailable" AND $newTuition != "invalid"){ // Tution Edited
    $sql = "INSERT INTO bursary_covers(Bursary_ID,Bursary_Covers) VALUES('$bursary_id','$newTuition')";
    $result = $mysqli->query($sql);
} elseif($oldTuition =="Tuition" AND $newTuition == "invalid"){
    $sql = "DELETE FROM bursary_covers WHERE Bursary_ID = $bursary_id AND Bursary_Covers='$oldTuition'";
    $result = $mysqli->query($sql);
}

//------------------------Registration Fees------------------------------------------------------------------
$whatWeCover= "Registration Fees";
$oldRegistrationFees = editCovers($bursary_id,$whatWeCover,$mysqli);

if($oldRegistrationFees == $newRegistrationFees){ //Did not Update
    //we do nothing
} elseif($oldRegistrationFees=="Unavailable" AND $newRegistrationFees != "invalid"){ // Tution Edited
    $sql = "INSERT INTO bursary_covers(Bursary_ID,Bursary_Covers) VALUES('$bursary_id','$newRegistrationFees')";
    $result = $mysqli->query($sql);
} elseif($oldRegistrationFees =="Registration Fees" AND $newRegistrationFees == "invalid"){
    $sql = "DELETE FROM bursary_covers WHERE Bursary_ID = $bursary_id AND Bursary_Covers='$oldRegistrationFees'";
    $result = $mysqli->query($sql);
}

//------------------------Accommodation Fees------------------------------------------------------------------
$whatWeCover= "Accommodation Fees";
$oldAccommodationFees = editCovers($bursary_id,$whatWeCover,$mysqli);

if($oldAccommodationFees == $newAccomodationFees){ //Did not Update
    //we do nothing
} elseif($oldAccommodationFees=="Unavailable" AND $newAccomodationFees != "invalid"){ // Tution Edited
    $sql = "INSERT INTO bursary_covers(Bursary_ID,Bursary_Covers) VALUES('$bursary_id','$newAccomodationFees')";
    $result = $mysqli->query($sql);
} elseif($oldAccommodationFees =="Accommodation Fees" AND $newAccomodationFees == "invalid"){
    $sql = "DELETE FROM bursary_covers WHERE Bursary_ID = $bursary_id AND Bursary_Covers='$oldAccommodationFees'";
    $result = $mysqli->query($sql);
}

//------------------------Transport------------------------------------------------------------------
$whatWeCover= "Transport";
$oldTransport = editCovers($bursary_id,$whatWeCover,$mysqli);

if($oldTransport == $newTranport){ //Did not Update
    //we do nothing
} elseif($oldTransport=="Unavailable" AND $newTranport != "invalid"){ // Tution Edited
    $sql = "INSERT INTO bursary_covers(Bursary_ID,Bursary_Covers) VALUES('$bursary_id','$newTranport')";
    $result = $mysqli->query($sql);
} elseif($oldTransport =="Transport" AND $newTranport == "invalid"){
    $sql = "DELETE FROM bursary_covers WHERE Bursary_ID = $bursary_id AND Bursary_Covers='$oldTransport'";
    $result = $mysqli->query($sql);
}

//------------------------Laptop-----------------------------------------------------------------
$whatWeCover= "Laptop";
$oldLaptop = editCovers($bursary_id,$whatWeCover,$mysqli);

if($oldLaptop == $newTranport){ //Did not Update
    //we do nothing
} elseif($oldLaptop=="Unavailable" AND $newLaptop != "invalid"){ // Tution Edited
    $sql = "INSERT INTO bursary_covers(Bursary_ID,Bursary_Covers) VALUES('$bursary_id','$newLaptop')";
    $result = $mysqli->query($sql);
} elseif($oldLaptop =="Laptop" AND $newLaptop == "invalid"){
    $sql = "DELETE FROM bursary_covers WHERE Bursary_ID = $bursary_id AND Bursary_Covers='$oldLaptop'";
    $result = $mysqli->query($sql);
}

//------------------------Meals-----------------------------------------------------------------
$whatWeCover= "Meals";
$oldMeals = editCovers($bursary_id,$whatWeCover,$mysqli);

if($oldMeals == $newMeals){ //Did not Update
    //we do nothing
} elseif($oldMeals=="Unavailable" AND $newMeals != "invalid"){ // Tution Edited
    $sql = "INSERT INTO bursary_covers(Bursary_ID,Bursary_Covers) VALUES('$bursary_id','$newMeals')";
    $result = $mysqli->query($sql);
} elseif($oldMeals =="Meals" AND $newMeals == "invalid"){
    $sql = "DELETE FROM bursary_covers WHERE Bursary_ID = $bursary_id AND Bursary_Covers='$oldMeals'";
    $result = $mysqli->query($sql);
}

//------------------------Books Allowance-----------------------------------------------------------------
$whatWeCover= "Books Allowance";
$oldBookAllowance = editCovers($bursary_id,$whatWeCover,$mysqli);

if($oldBookAllowance == $newBooksAllowance){ //Did not Update
    //we do nothing
} elseif($oldBookAllowance=="Unavailable" AND $newBooksAllowance != "invalid"){ // Tution Edited
    $sql = "INSERT INTO bursary_covers(Bursary_ID,Bursary_Covers) VALUES('$bursary_id','$newBooksAllowance')";
    $result = $mysqli->query($sql);
} elseif($oldBookAllowance =="Books Allowance" AND $newMeals == "invalid"){
    $sql = "DELETE FROM bursary_covers WHERE Bursary_ID = $bursary_id AND Bursary_Covers='$oldBookAllowance'";
    $result = $mysqli->query($sql);
}


?>