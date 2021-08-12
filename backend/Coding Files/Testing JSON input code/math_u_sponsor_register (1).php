<?php
//====================================
include 'math_u_db_connection.php';
include 'math_u_registration.php';

//====================================
//Tables Needed: all_users, company, sponsor_users, student
//Validate Emails for uniqueness 
//Hash All Passwords 
//Generate ID's for both types of users
//Insert into the DB
//==========================MAIN==============================================//
//Input Management

//$input = file_get_contents('php://input');
$input = /*'{
    "company_name": "Company xyz",
    "company_industry": "IT",
    "f_name": "Raaga Krishna",
    "l_name": "Velthapu",
    "email_address": "asdf",
    "password": "123"
}';*/
'{
	"company": {
		"company_id": 0, 
		"company_name": " RB Industries", 
		"company_industry": "IT", 
		"number_of_reports": ""
	},
	"company_id": 0,
	"email_address": "zayadire@gmail.com",
	"first_name_of_user": "Zaya",
	"inactive": "",
	"isSuperAdmin": "",
	"isVerified": "",
	"last_name_of_user": "Dire",
	"manageApplications": "",
	"manageBursaries": "",
	"password": "zaya",
	"sponsor_id": ""
}';
$data = json_decode($input, true);

//---------------
//Company Section
//---------------

echo $data['company']['company_id'];

if (isset($data['company']['company_name'])and isset($data['company']['company_industry']) and isset($data["email_address"])){
	echo "YES";
}
else{
	echo "No";
}

?>
