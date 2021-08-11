import { Company } from './Company';

export class Sponsor_users{
    sponsor_id? = "";
    first_name_of_user = "";
    last_name_of_user = "";
    email_address = "";
    password = "";
    company_id? = 0;
    isSuperAdmin? = "";
    manageBursaries?	= "";
	manageApplications? = "";
	inactive? = "";
	isVerified? = "";

    company? : Company;
}
