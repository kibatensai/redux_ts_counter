import React, { FC } from 'react';
import './MainScreen.css'
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, InitialStateType, setValueFromLS, setViewMode } from '../../bll/counterReducer';
import { IGlobalState } from '../../bll/store';

type MainScreenType = {
    checkOptions: boolean
}

const MainScreen: FC<MainScreenType> = ( { checkOptions,} ) => {

    const dispatch = useDispatch()
    const counterState = useSelector<IGlobalState, InitialStateType>(state => state.counter)

    const incCounter = () => {
        if (counterState.counter === counterState.maxValue) return
        dispatch(incrementCounter())
    }

    const decCounter = () => {
        if (counterState.counter === counterState.startValue) return
        dispatch(decrementCounter())
    }

    const resetCounter = () => dispatch(setValueFromLS(counterState.startValue))

    const viewModeHandler = () => {
        dispatch(setViewMode(true))
    }

    const counterClassName = counterState.counter === counterState.maxValue ? 'counter_end' : 'counter'

    return (
        <div className='screen_wrapper'>

        <div className='main_screen'>
            <div className={counterClassName}>
                {checkOptions ? 'Incorrect value!' : counterState.counter}
            </div>
            <div className='buttons'>
                <Button name={'inc'}
                    callBack={incCounter}
                    disabled={counterState.counter === counterState.maxValue} />
                <Button name={'dec'}
                    callBack={decCounter}
                    disabled={counterState.counter === counterState.startValue} />
                <Button name={'reset'}
                    callBack={resetCounter}
                    disabled={counterState.counter === counterState.startValue} />
                <Button name={'settings'}
                    callBack={viewModeHandler}
                    disabled={checkOptions}/>
            </div>
        </div>
        </div>
    )
}

export default MainScreen