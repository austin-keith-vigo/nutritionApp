import React from 'react';

import {
  ADD_INGREDIENT
} from './../actions/types';

import {
  SearchBar
} from './../components';

const INITIAL_STATE = {
  activeSearchBars: [<SearchBar index={0}/>],
  activeSearchBarsValues: ['']
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_INGREDIENT:
      return {...state, activeSearchBars: action.payload};
    default:
      return {...state};
  }
};
