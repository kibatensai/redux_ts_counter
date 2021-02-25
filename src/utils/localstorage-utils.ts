import { StateForLSType } from "../bll/counterReducer";
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return {'startValue': 0, 'maxValue': 5};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 


export const saveState = (state: StateForLSType) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
  };
