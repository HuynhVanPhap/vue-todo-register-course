import { createStore, createLogger } from 'vuex'
import { RootState, Store } from './types'
import { store as students } from './students';

export const store = createStore({
    modules: {
        students
    }
});

export function useStore(): Store {
    return store as Store;
}