import Student from '../../types/Student'
import * as data from '../../static/data'
// Định nghĩa type cho State với bên trong là một thuộc tính students: Students[]
export type State = {
    data: Student[];
}

// Khai báo state với kiểu dữ liệu State bên trên và định nghĩa thuộc tính students
export const state: State = {
    data: [data.initStudent]
}