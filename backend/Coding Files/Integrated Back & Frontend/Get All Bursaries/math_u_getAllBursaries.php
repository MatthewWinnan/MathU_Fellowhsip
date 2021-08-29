<?php
//get all applicants 
include 'math_u_db_connection.php';
//include 'math_u_registration_functions.php';
include 'all_classes.php';


echo json_encode(GetBursaries($mysqli));
//-----------------------------------------------------------------------------------------------------------
function GetBursaryCovers($bursary_id, $mysqli){
	$sql = "SELECT * FROM bursary_covers WHERE Bursary_ID=$bursary_id";
	$result = $mysqli->query($sql);
	
	$cover = array();
	$counter = 0;
	
	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			$cover[$counter]=$row["Bursary_Covers"];
			$counter = $counter+1;
		}
		return $cover;
		
	}else return null;
	
}
//-----------------------------------------------------------------------------------------------------------------
function GetBursaries($mysqli){
	$sql = "SELECT * FROM bursaries WHERE isVisible = TRUE";
	$result = $mysqli->query($sql);
	
	$list = [];
	$counter = 0;
	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()) {
			//create new bursary 
			$newBursary = new bursary($row["Company_ID"], $row["Bursary_Name"], $row["Bursary_Type"], $row["WB_Duration"], $row["Closing_Date"], $row["Minimum_Age"], $row["Maximum_Age"], $row["Academic_Level"], $row["Study_field"], $row["Current_Year"], $row["Bursary_Duration"], $row["Minimum_Average"], $row["RSA_Citizen"], $row["Financial_Need"], $row["Study_Further"], $row["Disability"], $row["Province"], $row["Email_Address"], $row["Shortlist_Date"], $row["isVisible"], $row["Description"]);
			//$newBursary->Company = GetCompanyClass($comp_id, $mysqli);
			$newBursary->bursary_id = $row["Bursary_ID"];
			//add to the array
			
			
			$newBursary->bursary_covers = GetBursaryCovers($row["Bursary_ID"], $mysqli);
			//$newBursary->Applicants = GetApplicants($row["Bursary_ID"], $mysqli);
			//add to the array
			$list[$counter]= $newBursary;
			$counter = $counter+1;

			//add bursary status
			//$newBursary-> $bursary_status = bursaryStatus($msqli,$company_id);
		}
		return $list;
	}else return null;	
//------------------------------------------------------------------------------------------------------------------


}
?>