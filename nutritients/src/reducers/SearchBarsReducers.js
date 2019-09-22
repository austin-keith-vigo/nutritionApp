import React from 'react';

import {
  ADD_INGREDIENT,
  ON_CHANGE_TEXT,
  SEARCH_BUTTON_PRESSED
} from './../actions/types';

import {
  SearchBar
} from './../components';

const INITIAL_STATE = {
  activeSearchBars: [{
    searchBar: <SearchBar index={0}/>,
    value: ''
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ADD_INGREDIENT:
      return {...state, activeSearchBars: action.payload};
    case ON_CHANGE_TEXT:
      return {...state, activeSearchBars: action.payload};
    case SEARCH_BUTTON_PRESSED:
      return {...state, ...INITIAL_STATE};
    default:
      return {...state};
  }
};
