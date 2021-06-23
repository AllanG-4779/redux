import { ADD_HISTORY, ADD_SCIENCE, ADD_MATH } from "./bookActionTypes";

export const addHistory = (number) => {
  return {
    type: ADD_HISTORY,
    payload: number,
  };
};
export const addScience = (number) => {
  return {
    type: ADD_SCIENCE,
    payload: number,
  };
};
export const addMath = (number) => {
  return {
    type: ADD_MATH,
    payload: number,
  };
};
