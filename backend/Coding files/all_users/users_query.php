<?php
$connection = mysqli_connect("localhost","root","");
$db = mysqli_select_db($connection,'student_bursary');

function QueryAllUsers(){
    
    $connection = mysqli_connect("localhost","root","");
    $db = mysqli_select_db($connection,'student_bursary');
	//return data of user_id
	$pssw = "";
	$mail = "fred@gmail.com";
    $query = "SELECT User_ID FROM all_users WHERE Email_address='fred@gmail.com' ";

    if($connection){
        echo "Connected to database";
        $query_run= mysqli_query($connection,$query);
        if($query_run){
            echo "Query Successful";
            if($query[0]=="U"){ //Student
                

            }

        }      
        
    }
    return $query_run;

}
QueryAllUsers(); 

?>