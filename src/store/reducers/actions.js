// actions.js

export const SET_FROM = 'SET_FROM';
export const SET_TO = 'SET_TO';
export const SET_DATE = 'SET_DATE';
export const SET_AC = 'SET_AC';

export const setFrom = (from) => ({
  type: SET_FROM,
  payload: from,
});

export const setTo = (to) => ({
  type: SET_TO,
  payload: to,
});

export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});

export const setAC = (isAC) => ({
  type: SET_AC,
  payload: isAC,
});
