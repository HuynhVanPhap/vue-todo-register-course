import {
    Store as VuexStore,
    CommitOptions,
    DispatchOptions,
    Module,
} from 'vuex';
import { RootState } from '../types'
import { state } from './state'
import type { State } from './state'
import { mutations, Mutations } from  './mutations'
import { getters, Getters } from './getters';

export { State };

export type StudentsStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit'>
& {
    commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
        key: K,
        payload: P,
        options?: CommitOptions
    ): ReturnType<Mutations[K]>;
}
& {
    getters: {
        [K in keyof Getters]: ReturnType<Getters[K]>
    };
};

export const store: Module<State, RootState> = {
    state,
    mutations,
    getters
}