import React from 'react';

import {
  ADD_INGREDIENT,
  ON_CHANGE_TEXT
} from './types';

import {
  SearchBar
} from './../components';

export const addIngredient = (activeSearchBars) => {
  let newActiveSearchBars = [...activeSearchBars];
  let newSearchBarIndex = activeSearchBars.length;
  newActiveSearchBars.push(<SearchBar index={newSearchBarIndex}/>);

  return {
    type: ADD_INGREDIENT,
    payload: newActiveSearchBars
  };
};

export const onChangeText = (text, index, activeSearchBars) => {
  console.log(text, index, activeSearchBars);

};
