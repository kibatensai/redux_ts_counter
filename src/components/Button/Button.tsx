import React, { FC } from 'react';
import './Button.css'

type ButtonPropsType = {
    name: string
    callBack?: () => void
    disabled: boolean
}

const Button: FC<ButtonPropsType> = ({ callBack, disabled, name }) => {

    let overallCallback = () => {
        callBack && callBack()
        
    }

    return (
        <div>
            <button onClick={overallCallback}
                disabled={disabled}
                className='button'>
                {name}
            </button>
        </div>
    )
}

export default Button