import React, { ChangeEvent, FC } from 'react';
import './InputComponent.css'

type InputComponentType = {
    getNewValue: (newValue: any) => void
    initialValue: number
    checkOptions: boolean
}

const InputComponent: FC<InputComponentType> = ( { getNewValue, initialValue, checkOptions } ) => {

    let onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        getNewValue(e.currentTarget.value)
           
    }

    const inputClassName = checkOptions ? 'bad_value_style' : 'good_value_style'

    return (
        <div className='input'>
            <input className={inputClassName} value={initialValue} onChange={onInputChangeHandler}/>
        </div>
    )
}

export default InputComponent