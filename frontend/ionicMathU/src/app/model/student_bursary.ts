import { Bursary } from "./bursaries";
import { student_users } from "./student_users";


export class Student_bursary{
    bursary_id: 0;
    student_id: 0;
    application_date?: string;
    status: string;

    bursary?: Bursary;  //bursary is not needed again sponsor side 
    student: student_users;
        //student with no current_academic_level cannot be here!! --> make sure
}
