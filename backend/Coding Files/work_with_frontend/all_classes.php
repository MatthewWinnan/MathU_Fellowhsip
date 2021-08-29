<?php
//--------------------------
//This is a file of classes
//---------------------------
//FRONTEND
/*
student{
	id? = 0;
    student_id? = "";
    first_name = "";
    last_name = "";
    date_of_birth = "";
    email_address = "";
    password? = "";
    validated? = 0;
    nationality? = false;
    contact_number? = "";
    city? = "";
    province? = "";
    disability? = false;
    current_academic_level? = "";
    grade? = 0.0;
    syllabus? = "";
    average? = 0.0;
    currently_studying? = "";
    year_of_study? = "";
    study_institution? = "";
    continue_studies? = false;
    gpa? = 0.0;
    description_of_student? = "";
    //registered_date = "";      //will not be used in frontend at all
    bursarred? = false;
    current_bursaries? = "";
    workback? = 0;
    //Filters is linked to another table 
    website? = "";
	//last_login = "";      //will not be used in frontend at all
    number_of_reports? = 0;
    banned? = false;

    marks?:Students_marks[];
	}
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
	/*
	 bursary_id? : 0;    //created in backend 
    company_id = 0;     //will be avaliable from login 
    bursary_name = "";  //compulsary 
    bursary_type = "";  //compulsary 
    bursary_description = "";   //compulsary 
    WB_duration? = 0;   //depends on bursary_type == "Work Back Bursary"
    min_age? = 0;
    max_age? = 0;
    academic_level = "";    //compulsary
    study_field = "";       //compulsary (only if not "High School")
    minimum_year_required = 0; //compulsary (only if not "High School")
    min_average = 0;      //compulsary
    RSA_citizen = false;
    financial_need = false;
    study_further = false;
    disability = false;
    province? = "";          //not compulsary
    bursary_covers = [];    //array
    closing_date = "";  //compulsary 
    shortlist_date = "";    //compulsary
    email_address = "";     //compulsary
    bursary_duration = 0;       //compulsary
    isVisible = true;       //mostly true 
    bursary_status?: ""; 
	*/
	public $bursary_id;//=
	public $company_id;//=
	public $bursary_name;//=
	public $bursary_type;//=
	public $WB_duration;//=
	public $closing_date;//=
	public $min_age;//=
	public $max_age;//=
	public $academic_level;//=
	public $study_field;//=
	public $minimum_year_required;
	public $bursary_duration;//=
	public $min_average;//=
	public $RSA_citizen;//=
	public $financial_need;//=
	public $study_further;//=
	public $disability;//=
	public $province;//=
	public $email_address;//=
	public $shortlist_date;//=
	public $isVisible;//=
	public $bursary_description;//=
	public $bursary_covers = [];
	
	public company $Company;
	public $Applicants = [];
	
	public $bursary_status;
	
	public function __construct($company_id, $bursary_name, $bursary_type, $WB_duration, $closing_date, $min_age, $max_age, $academic_level, 
		$study_field, $minimum_year_required, $bursary_duration, $min_average, $RSA_citizen, $financial_need,
	 $study_further, $disability, $province, $email_address, $shortlist_date, $isVisible, $bursary_description){
		 $this->company_id = $company_id;
		 $this->bursary_name= $bursary_name;
		 $this->bursary_type = $bursary_type;
		 $this->WB_duration = $WB_duration;
		 $this->closing_date = $closing_date;
		 $this->min_age = $min_age;
		 $this->max_age = $max_age;
		 $this->academic_level = $academic_level;
		 $this->study_field = $study_field;
		 $this->minimum_year_required = $minimum_year_required;
		 $this->bursary_duration = $bursary_duration;
		 $this->min_average = $min_average;
		 $this->RSA_citizen = $RSA_citizen;
		 $this->financial_need = $financial_need;
		 $this->disability = $disability;
		 $this->study_further = $study_further;
		 $this->province = $province;
		 $this->email_address = $email_address;
		 $this->shortlist_date = $shortlist_date;
		 $this->isVisible = $isVisible;
		 $this->bursary_description = $bursary_description;
	 }

}

//--------------
//BURSARY COVERS
//--------------
class bursary_covers{

	//new bursary($company_id=0, $bursary_name="", $bursary_type="", $wb_duration="", $closing_date=, $min_age=13, $max_age = 40, $acad_level="", $study_field="", $current_year=1, $duration=1, $min_average=60.0, $rsa_citizen=TRUE, $financial_need=TRUE,
	// $study_further=TRUE, $disability=FALSE, $province="", $email_address="", $short_date=, $isVisible=TRUE, $description="");

	public $Bursary_ID;
	public $Bursary_Covers;
	public bursary $Bursary;
	
	public function __construct($Bursary_ID,$Bursary_Covers){
		$this->Bursary_ID = $Bursary_ID;
		$this->Bursary_Covers = $Bursary_Covers;
	}
}

//--------------
//COMPANY
//--------------
class company{
	public $company_id;
	public $company_name;
	public $company_logo;
	public $company_industry;
	public $company_description;
	public $company_URL;
	public $number_of_reports;

	public function __construct($company_id, $company_logo, $company_industry, $company_description, $company_URL, $number_of_reports, $company_name){
		$this->company_id = $company_id;
		$this->company_logo = $company_logo;
		$this->company_industry = $company_industry;
		$this->company_description = $company_description;
		$this->company_URL = $company_URL;
		$this->number_of_reports = $number_of_reports;
		$this->company_name = $company_name;

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
	public $company_id;
	public $isSuperAdmin;
	public $manageBursaries;
    public $manageApplications;
	public $inactive;
	public $isVerified;

	public function __construct($sponsor_id, $first_name_of_user, $last_name_of_user, $email_address, $company_id, $isSuperAdmin, $manageBursaries, $manageApplications, $inactive,$isVerified){
		$this->sponsor_id = $sponsor_id;
		$this->first_name_of_user = $first_name_of_user;
		$this->last_name_of_user = $last_name_of_user;
		$this->email_address = $email_address;
		$this->company_id = $company_id;
		$this->isSuperAdmin = $isSuperAdmin;
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
	/*student{
	id? = 0;
    student_id? = "";
    first_name = "";
    last_name = "";
    date_of_birth = "";
    email_address = "";
    password? = "";
    validated? = 0;
    nationality? = false;
    contact_number? = "";
    city? = "";
    province? = "";
    disability? = false;
    current_academic_level? = "";
    grade? = 0.0;
    syllabus? = "";
    average? = 0.0;
    currently_studying? = "";
    year_of_study? = "";
    study_institution? = "";
    continue_studies? = false;
    gpa? = 0.0;
    description_of_student? = "";
    //registered_date = "";      //will not be used in frontend at all
    bursarred? = false;
    current_bursaries? = "";
    workback? = 0;
    //Filters is linked to another table 
    website? = "";
	//last_login = "";      //will not be used in frontend at all
    number_of_reports? = 0;
    banned? = false;*/


	public $id;
	public $first_name;
	public $last_name;
	public $date_of_birth;
	public $email_address;
	public $validated;
	public $nationality;
	public $contact_number;
	public $city;
	public $province;
	public $disability;
	public $current_academic_level;
	public $grade;
	public $syllabus;
	public $average;
	public $currently_studying;
	public $year_of_study;
	public $study_institution;
	public $continue_studies;
	public $gpa;
	public $description_of_student;
	public $bursarred;
	public $current_bursaries;
	public $workback;
	public $website;
	public $number_of_reports;
	public $banned;
	public $Students_marks=[];//array of objects
	
	
	//public subject_marks $Subjects_marks;
	public filters $Filter;
	
	public function __construct($id, $first_name, $last_name, $date_of_birth, $email_address, $validated, $nationality, $contact_number, $city, $province, $disability, $current_academic_level, $grade, $syllabus, $average, $currently_studying, $year_of_study, $study_institution, $continue_studies, $gpa, $description_of_student, $bursarred, $current_bursaries, $workback, $website, $number_of_reports,$banned){
		 $this->id = $id;
		 $this->first_name = $first_name;
		 $this->last_name = $last_name;
		 $this->date_of_birth = $date_of_birth;
		 $this->email_address = $email_address;
		 $this->validated = $validated;
		 $this->nationality = $nationality;
		 $this->contact_number = $contact_number;
		 $this->city = $city;
		 $this->province = $province;
		 $this->disability = $disability;
		 $this->current_academic_level = $current_academic_level;
		 $this->grade = $grade;
		 $this->syllabus = $syllabus;
		 $this->average = $average;
		 $this->currently_studying = $currently_studying;
		 $this->year_of_study = $year_of_study;
		 $this->study_institution = $study_institution;
		 $this->continue_studies = $continue_studies;
		 $this->gpa = $gpa;
		 $this->description_of_student = $description_of_student;
		 $this->bursarred = $bursarred;
		 $this->current_bursaries = $current_bursaries;
		 $this->workback = $workback;
		 $this->website = $website;
		 $this->number_of_reports = $number_of_reports;
		 $this->banned = $banned;
	 }
}

//------------------
//STUDENT BURSARIES
//------------------
class student_bursaries{

	public student $Student;
	//public bursary $Bursary;
	public $Bursary_ID;
	public $Student_ID;
	//public $ShortListed;
	public $Status;
	public $Application_Date;

	public function __construct($Bursary_ID, $Student_ID, $Status, $Application_Date){
		$this->Bursary_ID = $Bursary_ID;
		$this->Student_ID = $Student_ID;
		//$this->ShortListed = $ShortListed;
		$this->Status = $Status;
		$this->Application_Date = $Application_Date;
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
class marks{

	public $Student_ID;
	public $Subject_name;
	public $Mark;

	public function __construct($Student_ID, $Subject_name, $Mark){
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
