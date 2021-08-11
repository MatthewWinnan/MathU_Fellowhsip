export class Company {
    company_id = 0;
    company_name = "";
    company_industry = "";
    comapny_logo? : string;
    company_description? : string;
    company_URL? : string; 
    number_of_reports = "";
}

function set_company_name(c_name){
    this.company_name = c_name;
}
function set_company_industry(c_ind){
    this.company_industry = c_ind;
}

function get_company_name(){
    return this.company_name;
}
function get_company_industry(){
    return this.company_industry;
}

