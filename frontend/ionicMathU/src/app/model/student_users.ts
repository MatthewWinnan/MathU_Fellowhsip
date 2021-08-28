import { Students_marks } from "./subjects_marks";

export class student_users{
    id? = 0;
    student_id? = "";
    first_name = "";
    last_name = "";
    date_of_birth = "";
    email_address = "";
    password? = "";
    //validated? = 0; //not needed in frontend
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
    //number_of_reports? = 0;   //version 2
    //banned? = false;      //version 2

    Students_marks?:Students_marks[];
}