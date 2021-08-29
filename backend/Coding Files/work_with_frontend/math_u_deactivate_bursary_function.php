<?php


include_once "math_u_db_connection.php";         

function DeactivateBursary($bursaryName,$bursaryStatus,$mysqli){
	if ($bursaryName == ""){
		return false;
	}
    // We convert "False" to an interger 0
    if($bursaryStatus == false){
        $bursaryDeactivated = 0;
    }
    $sql = "UPDATE bursaries SET isVisible = '$bursaryDeactivated' WHERE Bursary_Name = '$bursaryName'";
	
    $result = $mysqli->query($sql);

    if($result){
        return true;
    }
	else{
        return false;
    }

}


?>