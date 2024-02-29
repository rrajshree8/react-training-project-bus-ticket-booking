// Define your initial state
const initialState = {
    from: '',
    to: '',
    date: '',
    AC: '',
  };
  
  // Define your actions
  export const setFrom = (from) => ({
    type: 'SET_FROM',
    payload: from,
  });
  
  export const setTo = (to) => ({
    type: 'SET_TO',
    payload: to,
  });
  
  export const setDate = (date) => ({
    type: 'SET_DATE',
    payload: date,
  });
  
  export const setAC = (AC) => ({
    type: 'SET_AC',
    payload: AC,
  });
  
  // Define your reducer
  const searchBarReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FROM':
        return { ...state, from: action.payload };
      case 'SET_TO':
        return { ...state, to: action.payload };
      case 'SET_DATE':
        return { ...state, date: action.payload };
      case 'SET_AC':
        return { ...state, AC: action.payload };
      default:
        return state;
    }
  };
  
  export default searchBarReducer;
  