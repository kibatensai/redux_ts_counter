import { saveState } from './../utils/localstorage-utils';
import { combineReducers, createStore } from 'redux';
import { loadState } from '../utils/localstorage-utils';
import { counterReducer } from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer,  loadState())

store.subscribe(() => {
    saveState({
        startValue: store.getState().counter.startValue,
        maxValue: store.getState().counter.maxValue
    })
})

export type IGlobalState = ReturnType<typeof rootReducer>

