import React from 'react';

import {
  GET_RECIPES_SUCCESS,
  MORE_INFO_BUTTON_PRESSED
} from './../actions/types';

const INITIAL_STATE = {
  recipesResultsData: [],
  expandedRecipe: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case GET_RECIPES_SUCCESS:
      return {...state, recipesResultsData: action.payload};
    case MORE_INFO_BUTTON_PRESSED:
      return {...state, expandedRecipe: action.payload};
    default :
      return {...state};
  }
}
