import { Bursary } from "./bursaries";
import { student_users } from "./student_users";


export class Student_bursary{
    Bursary_ID: number;
    Student_ID: number; 
    Application_Date?: string;
    Status: string;

    bursary?: Bursary;  //bursary is not needed again sponsor side 
    Student?: student_users;
        //student with no current_academic_level cannot be here!! --> make sure
}