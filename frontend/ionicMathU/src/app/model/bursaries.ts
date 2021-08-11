export class Bursary {
    bursary_id? : 0;    //created in backend 
    company_id = 0;     //will be avaliable from login 
    bursary_name = "";  //compulsary 
    bursary_type = "";  //compulsary 
    bursary_description = "";   //compulsary 
    WB_duration? = 0;   //depends on bursary_type == "Work Back Bursary"
    closing_date = "";  //compulsary 
    min_age? = 0;
    max_age? = 0;
    academic_level = "";    //compulsary
    study_field = "";       //compulsary (only if not "High School")
    minimum_year_required = 0; //compulsary (only if not "High School")
    bursary_duration = 0;       //compulsary
    min_average = 0.0;      //compulsary
    RSA_citizen = false;
    financial_need = false;
    study_further = false;
    disability = false;
    province? = "";          //
    bursary_covers = [];    //array
    email_address = "";     //compulsary
    shortlist_date = "";    //compulsary
    isVisible = true;       //mostly true 
}