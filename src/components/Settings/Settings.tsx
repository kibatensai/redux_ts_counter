import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InitialStateType, setMaxValue, setStartValue, setValueFromLS, setViewMode } from '../../bll/counterReducer';
import { IGlobalState } from '../../bll/store';
import Button from '../Button/Button';
import InputComponent from '../InputComponent/InputComponent';
import './Settings.css';

type SettingsType = {
    checkOptions: boolean

}

const Settings: FC<SettingsType> = ({ checkOptions}) => {
    const counterState = useSelector<IGlobalState, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()

    const getNewStartValue = (newStartValue: any) => {
        if (!isFinite(+newStartValue)) return
        dispatch(setStartValue(+newStartValue))
    }

    const getNewMaxValue = (newMaxValue: any) => {
        if (!isFinite(+newMaxValue)) return
        dispatch(setMaxValue(+newMaxValue))
    }

    const setRecentValue = () => {
        dispatch(setStartValue(counterState.startValue))
        dispatch(setMaxValue(counterState.maxValue))
        dispatch(setValueFromLS(counterState.startValue))
        dispatch(setViewMode(false))
    }    

    return (
        <div className='settings_wrapper'>
            <div className='settings'>
                <div className='input_container'>
                    <InputComponent getNewValue={getNewMaxValue}
                        initialValue={+counterState.maxValue}
                        checkOptions={checkOptions} 
                        />
                    <label>Max Value</label>
                </div>
                <div className='input_container'>
                    <InputComponent getNewValue={getNewStartValue}
                        initialValue={+counterState.startValue}
                        checkOptions={checkOptions} 
                        />
                    <label>Start Value</label>
                </div>
                <div>
                    <Button name='set'
                        callBack={setRecentValue}
                        disabled={checkOptions}
                    />
                </div>
            </div>
        </div>
    )
}

export default Settings