<?php
//http://localhost/bursary/DeactivateBursary/math_u_deactivate_bursary.php
//include functions
include_once "math_u_db_connection.php";
include_once 'math_u_deactivate_bursary_function.php';


$input = file_get_contents('php://input');
$data = json_decode($input, true);

//Get Bursary Name to Query bursaries table.
$bursaryName = $data['bursary_name'];

//Get Bursary Status to deactivate the bursary.
$bursaryStatus = $data['isVisible']; 


// For test purposes
/*
$bursaryName = "BP";
$bursaryStatus = "false";
*/

//Bursary Status class
class BursaryStatus{
    public $message;
}

//Run deactivating query
$result = DeactivateBursary($bursaryName,$bursaryStatus,$mysqli);

//Check if query was successful

if($result){
    $deactivated = new BursaryStatus();
    $deactivated -> $message ="Success!";
    echo json_encode($deactivated);
} else {
    $deactivated = new BursaryStatus();
    $deactivated -> $message ="Bursary Not Deactivated!";
    echo json_encode($deactivated);   
}

?>