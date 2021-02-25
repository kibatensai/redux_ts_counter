import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { InitialStateType, setMaxValue, setStartValue, setValueFromLS, setViewMode } from './bll/counterReducer';
import { IGlobalState } from './bll/store';
import MainScreen from './components/MainScreen/MainScreen';
import Settings from './components/Settings/Settings';

function App() {

  const counterState = useSelector<IGlobalState, InitialStateType>(state => state.counter)

  const checkOptions = isNaN(counterState.startValue) || isNaN(counterState.maxValue)
                                ? true
                                : counterState.startValue === counterState.maxValue
                                ? true
                                : counterState.startValue > counterState.maxValue
                                ? true
                                : counterState.startValue < 0 || counterState.maxValue < 0
                                ? true
                                : false

  return (
    
    <div className='App'>
      { counterState.viewMode 
        ? <MainScreen checkOptions={checkOptions}/>
        : <Settings checkOptions={checkOptions}/>
      }
    </div>
    
  );
}

export default App;
