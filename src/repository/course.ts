import { axiosConfig } from './axios-config'

export const courseRepo: any = {
    // Return Promise Object vì axiosConfig's instance axios là một Promise object
    getListCourses: async () => {
        return await axiosConfig.get('/courses' )
        .then((response: any) => {
            return response.data;
        });
    }
}