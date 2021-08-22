import { student_users } from './student_users';
import { Sponsor_users } from './Sponsor_users';

export class AllUsers{
	student? : student_users;
	sponsor_users? : Sponsor_users;

	role: string = ""; //Student, SuperAdmin, Employee, ManageBursary, ManageApplications 
}