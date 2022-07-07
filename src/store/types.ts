import { State as StudentsState, StudentsStore } from './students';

export type RootState = {
    students: StudentsState
}

export type Store = StudentsStore<Pick<RootState, 'students'>>