<?php
//includes
include 'math_u_db_connection.php';
include 'math_u_editSponsor_functions.php';
include 'all_classes.php';


$input = '{
    "company_id": "14",
    "company_name": "Google",
    "company_industry": "Banking, Finance, Insurance, Stockbroking",
    "number_of_reports": "0",
    "company_logo": "",
    "company_description": "This is dummy text.",
    "company_URL": "www.google.com"
}';
 
//$input = file_get_contents('php://input');
$data = json_decode($input, true);
$description = $data["company_description"];
$URL = $data["company_URL"];
$id = $data["company_id"];
$new_user = new all_users();

if (UpdateURL($URL, $id, $mysqli)){
	if (UpdateDescription($description, $id, $mysqli)){
		$new_user->message = "Success! Company information updated.";
		echo json_encode($new_user);
	}
	else{
		$new_user->message = "Could not update company description. Try again.";
		echo json_encode($new_user);
	}
}
else{
	$new_user->message = "Could not update company URL. Try again.";
     echo json_encode($new_user);
}

?>