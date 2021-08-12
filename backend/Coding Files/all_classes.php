<?php
//--------------------------
//This is a file of classes 
//---------------------------

//--------------
//ALL USERS 
//--------------
class all_users{
	public $Email_address;
	
	public function __construct($Email_address){
		$this->Email_address = $Email_address;
	}
}

//--------------
//BURSARIES 
//--------------
class bursaries{

	
}

//--------------
//BURSARY COVERS 
//--------------
class bursary_covers{
	public int $Bursary_ID;
	public $Bursary_Covers;
	
	public function __construct($Bursary_ID=0,$Bursary_Covers=""){
		$this->Bursary_ID = $Bursary_ID;
		$this->Bursary_Covers = $Bursary_Covers;
	}
}

//--------------
//COMPANY 
//--------------
class company{
	public int $company_id;
	public $company_logo;
	public $company_industry;
	public $company_description;
	public $company_URL;
	public $number_of_reports;
	
	public function __construct($company_id=0, $company_logo="", $company_industry="", $company_description="", $company_URL="", $number_of_reports=0){
		$this->company_id = $company_id;
		$this->company_logo = $company_logo;
		$this->company_industry = $company_industry;
		$this->company_description = $company_description;
		$this->company_URL = $company_URL;
		$this->number_of_reports = $number_of_reports;
		
	}
	
}

//--------------
//SPONSOR USERS
//--------------
class sponsor_users{
	public $sponsor_id;
	public $first_name_of_user;
	public $last_name_of_user;
	public $email_address;
	public int $company_id;
	public bool $isSuperAmin;
	public bool $manageBursaries;
    public bool $manageApplications;
	public bool $inactive;
	public bool $isVerified;
	
	public function __construct($sponsor_id="", $first_name_of_user="", $last_name_of_user="", $email_address="", $company_id=0, $isSuperAmin=FALSE, $manageBursaries=FALSE, $manageApplications=FALSE, $inactive=TRUE,$isVerified=FALSE){
		$this->sponsor_id = $sponsor_id;
		$this->first_name_of_user = $first_name_of_user;
		$this->last_name_of_user = $last_name_of_user;
		$this->email_address = $email_address;
		$this->company_id = $company_id;
		$this->isSuperAmin = $isSuperAmin;
		$this->manageBursaries = $manageBursaries;
		$this->manageApplications = $manageApplications;
		$this->inactive = $inactive;
		$this->isVerified = $isVerified;
	}
	
}

//--------------
//STUDENT 
//--------------
class student{
	
}

//------------------
//STUDENT BURSARIES 
//------------------
class student_bursaries{
	public int $Bursary_ID;
	public int $Student_ID;
	public bool $ShortListed;
	public $Status;
	
	public function __construct($Bursary_ID=0, $Student_ID=0, $ShortListed=false, $Status=""){
		$this->Bursary_ID = $Bursary_ID;
		$this->Student_ID = $Student_ID;
		$this->ShortListed = $ShortListed;
		$this->Status = $Status;
	}
	
}

//--------------
//SUBJECTS 
//--------------
class subjects{
	
}

//--------------
//SUBJECT MARKS
//--------------
class subjects_marks{
	public int $Student_ID;
	public $Subject_name;
	public double $Mark;
	
	public function __construct($Student_ID=0, $Subject_name="", $Mark=0.0){
		$this->Student_ID = $Student_ID;
		$this->Subject_name = $Subject_name;
		$this->Mark = $Mark;
	}
	
}

//--------------
//FILTERS
//--------------
class filters{
	public int $Student_ID;
	public $Filter;
	
	public function __construct($Student_ID, $Filter){
		$this->Student_ID = $Student_ID;
		$this->Filter = $Filter;
	}
}
?>