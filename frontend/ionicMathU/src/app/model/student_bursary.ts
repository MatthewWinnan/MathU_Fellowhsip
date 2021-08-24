import { Bursary } from "./bursaries";
import { student_users } from "./student_users";


export class Student_bursary{
    bursary_id: 0;
    student_id: 0;
    application_date?: "";
    status: "Pending";

    bursary: Bursary;
    student: student_users;
}
