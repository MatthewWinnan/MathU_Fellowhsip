<?php

include 'session.php';

$_SESSION['bursary_name'] = $_POST['bursary_name'];
//echo $_SESSION['bursary_name'];




function createBursary(){
    //Database Connection Start...
    date_default_timezone_set ("Africa/Johannesburg");
    $url="localhost";
    $username = "root";
    $password = "";
    $dbname = "math_u_fellows";
    $checkbox1 = $_POST['covers'];
    $chk="";  
    foreach($checkbox1 as $chk1)  
       {  
          $chk.= $chk1.",";  
       }  

    $conn = mysqli_connect($url, $username, $password, $dbname);
    //Database Connection End
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    // Single Checkboxes_variables
    $rsaCitizen = isset($_POST['rsaCitizen']) ? "1" : "0";
    $financialAssistance= isset($_POST['financialAssistance']) ? "1" : "0";
    $studyFurther = isset($_POST['studyFurther']) ? "1" : "0";
    $disability = isset($_POST['disability']) ? "1" : "0";

    //Date Created
    $date_created = date("Y-m-d");

    
    /*
    Here we assume that whoever logs in from company's side will be able to add/edit bursary
    So we will store his/her email in a session variable from the moment he/she logs in
    With the stored email we query sponsor_users table to get company_id and store it in $result variable
    We use the company_id to INSERT bursary details in bursaries 
    */
    //=========== TO GET COMPANY ID===============
    $email = 'dflorrian@jbsr.com'; //?????This will change for now it's just a test?????
    $sql= "SELECT * FROM `sponsor_users` WHERE email_address = 'dflorrian@jbsr.com'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    $result = $row["company_id"];
    //echo $result;

    //Query Start
    $sql = "INSERT INTO bursaries(Company_ID,Bursary_Name,WB_Duration,Closing_Date,Minimum_Age,Maximum_Age,Bursary_Duration,Minimum_Average,Email_Address,Shortlist_Date,Bursary_Covers,
    Bursary_Type,Academic_Level,Study_Field,Current_Year,Province,RSA_Citizen,Financial_Need,Study_Further,Disability,Date_Created) 
    VALUES($result,'$_POST[bursary_name]','$_POST[WorkBackDuration]','$_POST[bursaryEnddate]','$_POST[minAge]','$_POST[maxAge]','$_POST[bursaryDuration]','$_POST[requiredMarks]','$_POST[bursaryEmail]',
    '$_POST[bursaryCommunicationDate]','$chk','$_POST[bursaryType]','$_POST[academicLevel]','$_POST[fieldOfstudy]','$_POST[yearOfstudy]',
    '$_POST[province]',$rsaCitizen,$financialAssistance,$studyFurther,$disability,'$date_created')";
    //Query End
    
    //Running Queries
    $run_query = mysqli_query($conn,$sql);
    
    //$run_query4 = mysqli_query($conn,$sql4);
    if($run_query) {
    
        echo 'Query added sucessfully';
    } 
    else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}


createBursary();
?>