import Student from '../types/Student'

export const courses = [
    "PHP",
    "JavaScript",
    "ReactJS"
];

export const classes = [
    {
        value: 'A3/1',
        label: 'A3/1'
    }, 
    {
        value: 'A5/2',
        label: 'A5/2'
    },
    {
        value: 'A8/1',
        label: 'A8/1'
    }
];

export const genders = [
    'Nữ',
    'Nam'
];

export const students: Student[] = [
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
];

export const initStudent: Student = {
    id: 0,
    name: '',
    birthday: '',
    gender: '',
    class: '',
    courses: []
};