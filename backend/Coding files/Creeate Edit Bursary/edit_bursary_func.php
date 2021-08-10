<?php

include 'session.php';

$_SESSION['bursary_name'] = $_POST['bursary_name'];
//echo $_SESSION['bursary_name'];


function editBursary(){
    //Database Connection Start...
    date_default_timezone_set ("Africa/Johannesburg");
    $url="localhost";
    $username = "root";
    $password = "";
    $dbname = "math_u_fellows";
    $conn = mysqli_connect($url, $username, $password, $dbname);
    //Database Connection End
    $checkbox1 = $_POST['covers'];
    $chk="";  
    foreach($checkbox1 as $chk1)  
    {  
        $chk.= $chk1.","; 

    }

    $date_edited = date("Y-m-d");

    //
    // Single Checkboxes_variables
    $rsaCitizen = isset($_POST['rsaCitizen']) ? "1" : "0";
    $financialAssistance= isset($_POST['financialAssistance']) ? "1" : "0";
    $studyFurther = isset($_POST['studyFurther']) ? "1" : "0";
    $disability = isset($_POST['disability']) ? "1" : "0";
    //
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());

    } else {
        echo "CONNECTED<br>";
    }

    $email = 'dflorrian@jbsr.com';
    //$sql = "SELECT company_id FROM sponsor_users WHERE email_address = $email";
    $sql= "SELECT * FROM `sponsor_users` WHERE email_address = 'dflorrian@jbsr.com'";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    $result = $row["company_id"];
    echo $result;
    //
    $sql1 = "UPDATE bursaries SET Bursary_Name='$_POST[bursary_name]',WB_Duration='$_POST[WorkBackDuration]',Closing_Date='$_POST[bursaryEnddate]',Minimum_Age='$_POST[minAge]',Maximum_Age='$_POST[maxAge]',
    Bursary_Duration= '$_POST[bursaryDuration]',Minimum_Average='$_POST[requiredMarks]',Email_Address='$_POST[bursaryEmail]',Shortlist_Date= '$_POST[bursaryCommunicationDate]',Bursary_Covers='$chk',
    Bursary_Type='$_POST[bursaryType]',Academic_Level='$_POST[academicLevel]',Study_Field='$_POST[fieldOfstudy]',Current_Year='$_POST[yearOfstudy]',Province='$_POST[province]',RSA_Citizen=$rsaCitizen,
    Financial_Need=$financialAssistance,Study_Further=$studyFurther,Disability=$disability, Date_Created='$date_edited' WHERE Company_ID = $result";
    $run_query = mysqli_query($conn,$sql1);

    if($run_query) {
        
        echo 'Query added sucessfully';
    } 
    else {
        echo "Error: " . $sql1 . "<br>" . mysqli_error($conn);
    }
mysqli_close($conn);
}

editBursary()

?>