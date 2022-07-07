import { GetterTree } from 'vuex';

// eslint-disable-next-line import/no-cycle
import { RootState } from '../types'
import Student from '../../types/Student'

import { State } from './state';

export type Getters = {
    queryStudentById(state: State): (id: number | undefined) => Student | undefined;
    queryRemoveStudentById(state: State): (index: number) => void;
}

export const getters: GetterTree<State, RootState> & Getters = {
    queryStudentById: (state) => (id) => {
        return state.data.find(student => student.id === id);
    },
    queryRemoveStudentById: (state) => (index) => {
        state.data.splice(index, 1);
    }
}