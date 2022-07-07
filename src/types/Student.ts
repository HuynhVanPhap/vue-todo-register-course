type Student = {
    id?: number,
    name: string,
    birthday: string,
    gender: 1 | 0 | '',
    class: string,
    courses: string[]
}

export default Student;