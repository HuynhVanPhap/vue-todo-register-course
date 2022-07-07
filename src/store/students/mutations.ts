import { MutationTree } from 'vuex'
import Student from '../../types/Student'
import { State } from './state'
import { StudentsMutationTypes } from './mutation-types'

export type Mutations<S = State> = {
    [StudentsMutationTypes.STORE_DATA](state: S, payload: Student): void;
}

export const mutations: MutationTree<State> & Mutations = {
    [StudentsMutationTypes.STORE_DATA](state: State, student: Student) {
        state.data.push(student);
    }
}