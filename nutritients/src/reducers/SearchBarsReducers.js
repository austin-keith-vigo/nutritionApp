import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT
} from './../actions/types';

const INITIAL_STATE = {
  numOfSearchBars: 1
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_INGREDIENT:
      return {...state, numOfSearchBars: action.payload};
    case REMOVE_INGREDIENT:
      if(action.payload < 1){
        return {...state};
      }
      return {...state, numOfSearchBars: action.payload};
    default:
      return {...state};
  }
};
