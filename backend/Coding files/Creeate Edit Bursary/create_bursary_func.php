<?php

function createBursary(){
    //Have to include connection file here
    $url="localhost";
    $username = "root";
    $password = "";
    $dbname = "math_u_fellows";
    $conn = mysqli_connect($url, $username, $password, $dbname);

    $rsaCitizen = isset($_POST['rsaCitizen']) ? "1" : "0";
    $financialAssistance= isset($_POST['financialAssistance']) ? "1" : "0";
    $studyFurther = isset($_POST['studyFurther']) ? "1" : "0";
    $disability = isset($_POST['disability']) ? "1" : "0";

    //Date Created
    $date_created = date("Y-m-d");
    //We have to keep track of user email from the moment he/she log in 
    $email = 'augustnoheart@godspeed.com'; //?????This will change for now it's just a test?????
    $sql1= "SELECT * FROM `sponsor_users` WHERE email_address = 'augustnoheart@godspeed.com'"; //Query sponsor table to get company_id with users email
    $result = mysqli_query($conn,$sql1);
    $row = mysqli_fetch_assoc($result);
    $result = $row["company_id"];//company_id

    //Querys Start
    $sql = "INSERT INTO bursaries(Company_ID,Bursary_Name,WB_Duration,Closing_Date,Minimum_Age,Maximum_Age,Bursary_Duration,Minimum_Average,Email_Address,Shortlist_Date,
    Bursary_Type,Academic_Level,Study_Field,Minimum_Year_Of_Study,Province,RSA_Citizen,Financial_Need,Study_Further,Disability,Date_Created,Description) 
    VALUES($result,'$_POST[bursary_name]','$_POST[WorkBackDuration]','$_POST[bursaryEnddate]','$_POST[minAge]','$_POST[maxAge]','$_POST[bursaryDuration]','$_POST[requiredMarks]','$_POST[bursaryEmail]',
    '$_POST[bursaryCommunicationDate]','$_POST[bursaryType]','$_POST[academicLevel]','$_POST[fieldOfstudy]','$_POST[yearOfstudy]',
    '$_POST[province]',$rsaCitizen,$financialAssistance,$studyFurther,$disability,'$date_created','$_POST[bursaryDescription]')";

    $run_query = mysqli_query($conn,$sql);
    if($run_query){
        echo 'Query added sucessfully<br>';
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
    return $result; //Returns Company_id
}

function coversFor(){
    //Have to include connection file here
    $rs = createBursary(); //Company_id
    $url="localhost";
    $username = "root";
    $password = "";
    $dbname = "math_u_fellows";
    $checkbox1 = $_POST['covers'];
    $chk="";
    foreach($checkbox1 as $chk1){
        $chk.= $chk1.",";
    }
    $conn = mysqli_connect($url, $username, $password, $dbname);

    $sql2 = "SELECT * FROM `bursaries` WHERE Company_ID = $rs"; //query bursaries table for Bursary_ID 
    $bursary_id = mysqli_query($conn,$sql2);
    $row = mysqli_fetch_assoc($bursary_id);
    $bursary_id = $row["Bursary_ID"];//Bursary_ID

    $sql3 = "INSERT INTO bursary_covers(Bursary_ID,Bursary_Covers) VALUES ($bursary_id,'$chk')";
    $run_query = mysqli_query($conn,$sql3);

    if($run_query){
        echo 'Query added sucessfully<br>';
    } else {
        echo "Error: " . $sql3 . "<br>" . mysqli_error($conn);
    }
    return $bursary_id;
}

coversFor()

?>