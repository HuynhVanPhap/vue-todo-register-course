import Student from '../types/Student';
import { axiosConfig } from './axios-config'

const studentRepo: any = {
    getList: async () => {
        return await axiosConfig.get('/students')
        .then((response: any) => {
            return response.data;
        });
    },
    getById: async (id: number) => {
        return await axiosConfig.get('/students/'+id)
        .then((response: any) => {
            return response.data;
        })
    },
    addNew: async (student: Student) => {
        return await axiosConfig.post('/students', {
            name: student.name,
            gender: student.gender,
            birthday: student.birthday,
            class: student.class,
            courses: student.arrCourses
        }).then((res: any) => res.data);
    },
    remove: async (id: number) => {
        return await axiosConfig.delete('/students/'+id).then((res: any) => res.data);
    }
}

export default studentRepo;