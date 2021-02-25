import { loadState } from "../utils/localstorage-utils"

export enum ACTIONS_TYPE {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    SET_VALUE_FROM_LS = 'SET-VALUE-FROM-LS',
    SET_MAX_VALUE = 'SET-MAX-VALUE',
    SET_START_VALUE = 'SET-START-VALUE',
    SET_VIEWMODE = 'SET-VIEWMODE'

}

const stateForLS = {
    startValue: loadState().startValue,
    maxValue: loadState().maxValue,
}

const initialState = {
    startValue: stateForLS.startValue,
    maxValue: stateForLS.maxValue,
    counter: 1,
    viewMode: false
}

export type StateForLSType = typeof stateForLS
export type InitialStateType = typeof initialState

type ActionType = IncrementCounterActionType 
                | DecrementCounterActionType
                | SetValueFromLSActionType
                | SetMaxValueActionType
                | SetStartValueActionType
                | SetViewModeActionType

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case ACTIONS_TYPE.INCREMENT:
            return { ...state,
                    counter: +state.counter + 1}
        case ACTIONS_TYPE.DECREMENT:
            return { ...state,
                    counter: +state.counter - 1}
        case ACTIONS_TYPE.SET_VALUE_FROM_LS:
            return { ...state,
                    counter: +action.value}
        case ACTIONS_TYPE.SET_MAX_VALUE:
            return { ...state,
                    maxValue : action.value
                     }
        case ACTIONS_TYPE.SET_START_VALUE:
            return { ...state,
                    startValue: action.value
                     }
        case ACTIONS_TYPE.SET_VIEWMODE:
            return {...state,
                    viewMode: !action.viewMode}
        default:
            return state
    }
}

export const incrementCounter = () => ({type: ACTIONS_TYPE.INCREMENT} as const)
export type IncrementCounterActionType = ReturnType<typeof incrementCounter>

export const decrementCounter = () => ({type: ACTIONS_TYPE.DECREMENT} as const)
export type DecrementCounterActionType = ReturnType<typeof decrementCounter>

export const setValueFromLS = (value: number) => ({type: ACTIONS_TYPE.SET_VALUE_FROM_LS, value} as const)
export type SetValueFromLSActionType = ReturnType<typeof setValueFromLS>

export const setMaxValue = (value: number) => ({type: ACTIONS_TYPE.SET_MAX_VALUE, value} as const)
export type SetMaxValueActionType = ReturnType<typeof setMaxValue>

export const setStartValue = (value: number) => ({type: ACTIONS_TYPE.SET_START_VALUE, value} as const)
export type SetStartValueActionType = ReturnType<typeof setStartValue>

export const setViewMode = (viewMode: boolean) => ({type: ACTIONS_TYPE.SET_VIEWMODE, viewMode} as const)
export type SetViewModeActionType = ReturnType<typeof setViewMode>