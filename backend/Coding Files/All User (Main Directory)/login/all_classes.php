<?php
//--------------------------
//This is a file of classes
//---------------------------
//FRONTEND
/*
For Sponsor Register:
{
    "sponsor_id": "",
    "first_name_of_user": "",	--
    "last_name_of_user": "",	--
    "email_address": "",	--
    "password": "",	--
    "company_id": 0,
    "isSuperAdmin": false,	--> true
    "manageBursaries": false,	--> true
    "manageApplications": false,	--> true
    "inactive": false,
    "isVerified": false,
    "company": {
        "company_id": 0,
        "company_name": "", 	--
        "company_industry": "",	--
        "number_of_reports": 0
    }
}

For Sponsor Login 
{
    "sponsor_id": "",
    "first_name_of_user": "",
    "last_name_of_user": "",
    "email_address": "",
    "company_id": 0,
    "isSuperAdmin": false,
    "manageBursaries": false,
    "manageApplications": false,
    "inactive": false,
    "isVerified": true,		--> compulsary
    "company": {
        "company_id": 0,
        "company_name": "",
        "company_industry": "",
		"comapny_logo" : "",
		"company_description" : "",
		"company_URL" : "",
        "number_of_reports": 0
    }
}
*/
//--------------
//ALL USERS
//--------------
class all_users{
	public student $Student;
	public sponsor_users $Sponsor;
	public $message;
}

//--------------
//BURSARIES
//--------------
class bursary{

	//new company($company_id=0, $company_logo="", $company_industry="", $company_description="", $company_URL="", $number_of_reports=0);
	
	public int $bursary_id;
	public int $company_id;
	public $bursary_name;
	public $bursary_type;
	public int $wb_duration;
	public date $closing_date;
	public int $min_age;
	public int $max_age;
	public $acad_level;
	public $study_field;
	public int $current_year;
	public int $duration;
	public double $min_average;
	public bool $rsa_citizen;
	public bool $financial_need;
	public bool $study_further;
	public bool $disability;
	public $province;
	public $email_address;
	public date $short_date;
	public $isVisible;
	public $description;
	
	public company $Company;
	
	public function __construct($company_id=0, $bursary_name="", $bursary_type="", $wb_duration=0, $closing_date, $min_age=13, $max_age = 40, $acad_level="", $study_field="", $current_year=1, $duration=1, $min_average=60.0, $rsa_citizen=TRUE, $financial_need=TRUE,
	 $study_further=TRUE, $disability=FALSE, $province="", $email_address="", $short_date, $isVisible=TRUE, $description=""){
		 $this->company_id = $company_id;
		 $this->bursary_name= $bursary_name;
		 $this->bursary_type = $bursary_type;
		 $this->wb_duration = $wb_duration;
		 $this->closing_date = $closing_date;
		 $this->min_age = $min_age;
		 $this->$max_age = $max_age;
		 $this->acad_level = $acad_level;
		 $this->study_field = $study_field;
		 $this->current_year = $current_year;
		 $this->duration = $duration;
		 $this->min_average = $min_average;
		 $this->rsa_citizen = $rsa_citizen;
		 $this->financial_need = $financial_need;
		 $this->disability = $disability;
		 $this->province = $province;
		 $this->email_address = $email_address;
		 $this->short_date = $short_date;
		 $this->isVisible = $isVisible;
		 $this->description = $description;
	 }

}

//--------------
//BURSARY COVERS
//--------------
class bursary_covers{

	//new bursary($company_id=0, $bursary_name="", $bursary_type="", $wb_duration="", $closing_date=, $min_age=13, $max_age = 40, $acad_level="", $study_field="", $current_year=1, $duration=1, $min_average=60.0, $rsa_citizen=TRUE, $financial_need=TRUE,
	// $study_further=TRUE, $disability=FALSE, $province="", $email_address="", $short_date=, $isVisible=TRUE, $description="");

	public int $Bursary_ID;
	public $Bursary_Covers;
	public bursary $Bursary;
	
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

	//new company($company_id=0, $company_logo="", $company_industry="", $company_description="", $company_URL="", $number_of_reports=0);
	
	public company $Company;
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

	public $id;
	public $first_name;
	public $last_name;
	public $dob;
	public $email;
	public $validated;
	public $nationality;
	public $contact;
	public $city;
	public $province;
	public $disability;
	public $current_acad;
	public $grade;
	public $syllabus;
	public $average;
	public $current_study;
	public $yearstudy;
	public $studyinst;
	public $cont_studies;
	public $gpa;
	public $studentbio;
	public $bursarred;
	public $current_bursary;
	public $workback;
	public $website;
	public $num_reports;
	public $banned;
	
	
	public subject_marks $Subjects_marks;
	public filters $Filter;
	
	public function __construct($id, $first_name, $last_name, $dob, $email, $validated, $nationality, $contact, $city, $province, $disability, $current_acad, $grade, $syllabus, $average, $current_study, $yearstudy, $studyinst, $cont_studies, $gpa, $studentbio, $bursarred, $current_bursary, $workback, $website, $num_reports,$banned){
		 $this->id = $id;
		 $this->first_name = $first_name;
		 $this->last_name = $last_name;
		 $this->dob = $dob;
		 $this->email = $email;
		 $this->validated = $validated;
		 $this->nationality = $nationality;
		 $this->contact = $contact;
		 $this->city = $city;
		 $this->province = $province;
		 $this->disability = $disability;
		 $this->current_acad = $current_acad;
		 $this->grade = $grade;
		 $this->syllabus = $syllabus;
		 $this->average = $average;
		 $this->current_study = $current_study;
		 $this->yearstudy = $yearstudy;
		 $this->studyinst = $studyinst;
		 $this->cont_studies = $cont_studies;
		 $this->gpa = $gpa;
		 $this->studentbio = $studentbio;
		 $this->bursarred = $bursarred;
		 $this->current_bursary = $current_bursary;
		 $this->workback = $workback;
		 $this->website = $website;
		 $this->num_reports = $num_reports;
		 $this->banned = $banned;
	 }
}

//------------------
//STUDENT BURSARIES
//------------------
class student_bursaries{

	public student $Student;
	public bursary $Bursary;
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
