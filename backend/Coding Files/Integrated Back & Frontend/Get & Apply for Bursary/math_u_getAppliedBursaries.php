<?php
//includes 
include 'math_u_db_connection.php';
include 'all_classes.php';



$input = file_get_contents('php://input');
$data = json_decode($input, true);
$student_id = $data["id"];

echo json_encode(getStudentBursary($student_id, $mysqli));

//------------------------------------------------------------------------------------------------------------
//Get Bursary functions 
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
///-------------------------------
class myStudent{
	public $Status; 
	public $Bursary_ID;
	public $Student_ID;
	public $bursary;
	
	public function __construct($Bursary_ID, $Student_ID, $Status, $bursary){
		$this->Status = $Status ;
		$this->Bursary_ID = $Bursary_ID;
		$this->Student_ID = $Student_ID;
		$this->bursary = $bursary;
	}
}
//-----------------------------------------------------------------------------------------------------------------
function getStudentBursary($student_id, $mysqli){
	$sql = "SELECT * FROM student_bursaries WHERE Student_ID=$student_id";
	$result = $mysqli->query($sql);
	
	$bursaries = [];
	$counter = 0;
	
	if ($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			$bDetails = GetBursaries($row["Bursary_ID"], $mysqli);
			$temp = new myStudent($row["Bursary_ID"], $row["Student_ID"], $row["Status"],$bDetails);
			$bursaries[$counter]=$temp;
			$counter = $counter+1;
		}
		return $bursaries;
		
	}else return $bursaries;
}
//-----------------------------------------------------------------------------------------------------------------
function GetBursaries($bur_id, $mysqli){
	$sql = "SELECT * FROM bursaries WHERE Bursary_ID=$bur_id";
	$result = $mysqli->query($sql);
	
	
	$counter = 0;
	if ($result->num_rows > 0){
		$row = $result->fetch_assoc();
		//create new bursary 
		$newBursary = new bursary($row["Company_ID"], $row["Bursary_Name"], $row["Bursary_Type"], $row["WB_Duration"], $row["Closing_Date"], $row["Minimum_Age"], $row["Maximum_Age"], $row["Academic_Level"], $row["Study_field"], $row["Current_Year"], $row["Bursary_Duration"], $row["Minimum_Average"], $row["RSA_Citizen"], $row["Financial_Need"], $row["Study_Further"], $row["Disability"], $row["Province"], $row["Email_Address"], $row["Shortlist_Date"], $row["isVisible"], $row["Description"]);
		$newBursary->Company = GetCompanyClass($row["Company_ID"], $mysqli);
		$newBursary->bursary_id = $row["Bursary_ID"];
		//add to the array
		
		
		$newBursary->bursary_covers = GetBursaryCovers($row["Bursary_ID"], $mysqli);
		//$newBursary->Applicants = GetApplicants($row["Bursary_ID"], $mysqli);
		//add to the array
		//$list[$counter]= $newBursary;
		//$counter = $counter+1;

		//add bursary status
		//$newBursary-> $bursary_status = bursaryStatus($msqli,$company_id);
		return $newBursary;
	}else return null;	
}	
//------------------------------------------------------------------------------------------------------------------
function GetCompanyClass($comp_id, $mysqli){
	$sql = "SELECT * FROM company WHERE company_id=$comp_id";
	$result = $mysqli->query($sql);
	
	if ($result->num_rows > 0){
		$row = $result->fetch_assoc();
		$newCompany = new company($row["company_id"], $row["company_logo"], $row["company_industry"], $row["company_description"], $row["company_URL"], $row["number_of_reports"], $row["company_name"]);
		return $newCompany;
	}else return null;
}
?>