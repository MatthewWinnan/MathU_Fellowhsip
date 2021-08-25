<?php


include_once "math_u_db_connection.php";
include_once "math_u_functions.php";

//$input = file_get_contents('php://input');
//$data = json_decode($input, true);

//$bursaryName = $data['bursary_name'];             
//$bursaryStatus = $data['isVisible'];          

$bursaryName = "ENGEN";                       // For test purposes
$bursaryStatus = "False";                       // For test purposes

function DeactivateBursary($bursaryName,$bursaryStatus,$mysqli){

    // We convert "False" to an interger 0
    if($bursaryStatus = "False"){
        $bursaryDeactivated = 0;
    }
    $sql = "UPDATE bursaries SET isVisible = '$bursaryDeactivated' WHERE Bursary_Name = '$bursaryName'";
    $result = $mysqli->query($sql);

    if($result){
        Display($result);
    }

}

DeactivateBursary($bursaryName,$bursaryStatus,$mysqli)
?>