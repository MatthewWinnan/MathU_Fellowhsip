<?php


$newRegistrationFees = "Registaration Fees";

$whatWeCover= "Tuition";
$bursary_id = 1;

function editCovers($bursary_id,$whatWeCover,$mysqli){

    $sql = "SELECT * FROM bursary_covers WHERE Bursary_covers='$whatWeCover' AND Bursary_ID = $bursary_id";
    $result = $mysqli->query($sql);
    $row = mysqli_fetch_assoc($result);
    if(empty($row)){
        return "Unavailable";
    }
    
    $variable = $row["Bursary_Covers"];

    if($result){
        return $variable;
    } else {
        return " ";
    }
    
}

echo editCovers($bursary_id,$whatWeCover,$mysqli);



?>