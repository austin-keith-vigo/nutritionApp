import {
  GET_RECIPES_SUCCESS
} from './../actions/types';

const INITIAL_STATE = {
  recipesResultsData: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case GET_RECIPES_SUCCESS:
      return {...state, recipesResultsData: action.payload};
    default :
      return {...state};
  }
}
