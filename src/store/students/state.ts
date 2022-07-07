import Student from '../../types/Student'

// Định nghĩa type cho State với bên trong là một thuộc tính students: Students[]
export type State = {
    data: Student[];
}

// Khai báo state với kiểu dữ liệu State bên trên và định nghĩa thuộc tính students
export const state: State = {
    data: [
        {
            id: 1,
            name: 'Nguyễn Văn A',
            birthday: '1998-04-05',
            gender: 1,
            class: 'A3/1',
            courses: [
                'PHP'
            ]
        },
        {
            id: 2,
            name: 'Phạm Thị B',
            birthday: '1998-04-05',
            gender: 0,
            class: 'A3/1',
            courses: [
                'PHP'
            ]
        }
    ]
}