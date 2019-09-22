import React from 'react';

import {
  ADD_INGREDIENT,
  ON_CHANGE_TEXT,
  SEARCH_BUTTON_PRESSED
} from './types';

import {
  SearchBar
} from './../components';

export const addIngredient = (activeSearchBars) => {
  let newActiveSearchBars = [...activeSearchBars];
  let newSearchBarIndex = activeSearchBars.length;
  newActiveSearchBars.push({
    searchBar: <SearchBar index={newSearchBarIndex}/>,
    value: ''
  });

  return {
    type: ADD_INGREDIENT,
    payload: newActiveSearchBars
  };
};

export const onChangeText = (text, index, activeSearchBars) => {
    //Change the value of the text of the search bar at the index
    let newActiveSearchBars = [...activeSearchBars];
    newActiveSearchBars[index].value = text;
    return {
      type: ON_CHANGE_TEXT,
      payload: newActiveSearchBars
    };
};

export const search = (activeSearchBars) => {

  return {
    type: SEARCH_BUTTON_PRESSED
  };
};
