import Course from "./Course";

type Student = {
    id?: number,
    name: string,
    birthday: string,
    gender: 1 | 0 | '',
    class: string,
    courses?: Course[],
    arrCourses?: (string | number)[],
    created_at?: string,
    updated_at?: string
}

export default Student;