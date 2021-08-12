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

//We must get wheather the sponsor clicked accept of denied if sponsor accept=(True) or if decline=(False)
//$response = 0;
function applicationStatus($response){
    
    if($response == "True"){ 
        $student_status = "True";
        return $student_status;

    } else{
        $student_status = "False"; 
        return $student_status;
    } 
}
//If student cancels the application
// We must get True(Yes interseted) or False(No longer interested)
//$interested= "False"; //Josh should send False if student cancel application
function studentInterested($interested){

    if($interested == "True"){
        return " ";
    } else {
        return 0;
    }


}


function editStatuses($conn){ //Three inputs Student's email and two conditions one from sposor 1 from student

    $student_status = "Pending";
    $student_interested = 1;

    // Updating default variables $student_status & $student_interested
    $id = studentID($conn);
    $int = studentInterested("False"); //For now
    $appStatus = applicationStatus("False");
    
    //Response from Sponsor
    if($appStatus == "True"){
        $student_status = "Accepted";
    } else {
        $student_status= "Declined";
    }
    //Response from Student
    if($int ==0){
        $student_interested = 0;
    } else {
        $student_interested = 1;

    }

 
    $sql3 = "UPDATE student_bursaries SET Interested='$student_interested', Status = '$student_status' 
    WHERE Student_ID = $id";
    $run_query3 = mysqli_query($conn,$sql3);

    if($run_query3){
        echo 'Query added sucessfully<br>';
    } else {
        echo "Error: " . $sql3 . "<br>" . mysqli_error($conn);
    }

    return;


}
editStatuses($conn)


?>