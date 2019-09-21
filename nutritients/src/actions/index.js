import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from './types';

export const addIngredient = (numOfSearchBars) => {
  return {
    type: ADD_INGREDIENT,
    payload: numOfSearchBars + 1
  };
};

export const removeIngredient = (numOfSearchBars) => {
  return {
    type: REMOVE_INGREDIENT,
    payload: numOfSearchBars - 1
  };
};
