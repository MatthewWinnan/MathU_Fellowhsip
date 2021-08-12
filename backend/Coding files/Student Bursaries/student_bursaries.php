<?php

include_once 'connection.php';
//--------------------------------------------------------------------------------------
function studentID($conn){ //input will be student's email

    //Below we student's ID from all users table
    $studentemail = "weare@theflash.com"; //email subject to change to session variable
    $sql = "SELECT * FROM `student` WHERE Email_address = '$studentemail'";
    $run_query = mysqli_query($conn,$sql);
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    $id = $row["ID"];
    
    return $id;
}

function bursaryID($conn){ // input will be bursary name student accepted
    $bursaryName= "SASOL";
    $sql = "SELECT * FROM `bursaries` WHERE Bursary_Name = '$bursaryName'";
    $run_query = mysqli_query($conn,$sql);
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    $bursary_id = $row["Bursary_ID"];
    
    return $bursary_id;
}
//--------------------------------------------------------------------------------------

//Adds data to student_bursaries,
//We have to store student's email in a session upon logging in in a SESSION variable

function addStudentBursaries($conn){ //Two inputs Student's email and bursary Name
    

    date_default_timezone_set ("Africa/Johannesburg");
    
    //Below we student's ID from all users table
    $id = studentID($conn); 
    //Below we get Bursary ID from bursaries table Using the Bursary Name the student accept
    $bursary_id = bursaryID($conn);

    $application_date = date("Y-m-d");

    $student_status = "Pending";
    $student_interested = 1;
 

    $sql3 = "INSERT INTO student_bursaries(Bursary_ID,Student_ID,Application_Date,Interested,Status) 
    VALUES ($bursary_id,$id,'$application_date',$student_interested,'$student_status')";
    $run_query3 = mysqli_query($conn,$sql3);

    if($run_query3){
        echo 'Query added sucessfully<br>';
    } else {
        echo "Error: " . $sql3 . "<br>" . mysqli_error($conn);
    }

    return;


}
addStudentBursaries($conn)



?>