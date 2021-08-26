<?php

include_once 'math_u_db_connection';

//$company_id= 1; // Well get company_id from FrontEnd
function bursaryStatus($msqli,$company_id){
    
    $sql = "SELECT * FROM `bursaries` WHERE Company_ID = '$company_id'";
    $result = $mysqli->query($sql);
    $row = mysqli_fetch_assoc($result);
    $isVisible = $row["isVisible"];
    $closing_date = $row['Closing_Date'];

    $date_today = date("Y-m-d");

    if($isVisible != 1){

        return "Deactivated";

    } elseif($date_today  <= $closing_date){
        return "Open";
    } else {
        return "Closed";
    }

}


?>