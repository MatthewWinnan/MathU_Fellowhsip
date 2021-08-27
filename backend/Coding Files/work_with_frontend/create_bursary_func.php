<?php

//------------------------------------------
//CREATE BURSARY RETURNS THE INSERTED OBJ 
//------------------------------------------

function createBursary($comp_id, $bursary_name,$WorkBackDuration,$bursaryEnddate, $minAge, $maxAge,  $bursaryDuration, $requiredMarks, $bursaryEmail, $bursaryCommunicationDate, $bursaryType, $academicLevel, $fieldOfstudy, $yearOfstudy, $province,  $rsaCitizen, $financialAssistance, $studyFurther, $disability, $isVisible, $bursary_description,$conn){
	
	
    //Date Created
    $date_created = date("Y-m-d");
	//$comp_id = 1;
   //echo json_encode($isVisible);
    //Query Start
    $sql = "INSERT INTO bursaries(Company_ID,Bursary_Name, Date_Created, Bursary_Type, WB_Duration, Closing_Date, Minimum_Age, Maximum_Age, Academic_Level, Study_Field, Current_Year, Bursary_Duration, Minimum_Average, RSA_Citizen, Financial_Need, Study_Further, Disability, Province, Email_Address, Shortlist_Date, isVisible, Description) 
    VALUES($comp_id,'$bursary_name', '$date_created', '$bursaryType', $WorkBackDuration,'$bursaryEnddate', $minAge, $maxAge, '$academicLevel', '$fieldOfstudy', $yearOfstudy, $bursaryDuration, $requiredMarks, $rsaCitizen,  $financialAssistance, $studyFurther, $disability, '$province', '$bursaryEmail','$bursaryCommunicationDate',$isVisible, '$bursary_description')";
    //Query End
    
    //Running Queries
    $run_query = mysqli_query($conn,$sql);
    
    //$run_query4 = mysqli_query($conn,$sql4);
    if($run_query==TRUE) {
		//Create an object!
		
		return $conn->insert_id;
    } 
    else {
		//return null
		//echo $conn->error;
		return 0;
    }
}

//-----------
//COVERS FOR
//-----------
function coversFor($bursary_id,$covers, $conn){
	
    $sql3 = "INSERT INTO bursary_covers(Bursary_ID,Bursary_Covers) VALUES ($bursary_id,'$covers')";
    $run_query = mysqli_query($conn,$sql3);
}

?>