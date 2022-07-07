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

export const initStudent: Student = {
    id: 0,
    name: '',
    birthday: '',
    gender: '',
    class: '',
    courses: []
};