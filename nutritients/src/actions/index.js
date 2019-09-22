import React from 'react';

import {
  ADD_INGREDIENT,
  ON_CHANGE_TEXT,
  SEARCH_BUTTON_PRESSED,
  GET_RECIPES_SUCCESS
} from './types';

import { API_KEY, NUM_OF_RESULTS } from './../Globals';

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

//Build the url to make a search for recipes
export const search = (activeSearchBars) => {
  return (dispatch) => {
    //Reset the search fields and go to the next screen
    dispatch({type: SEARCH_BUTTON_PRESSED});

    //Make an AJAX request to get the recipes
    var ingredients = 'ingredients=' + activeSearchBars[0].value + ',';
    for(index = 1; index < activeSearchBars.length; ++index){
      ingredients += ('+' + activeSearchBars[index].value + ',');
    }
    ingredients = ingredients.substring(0, ingredients.length - 1);
    var url = 'https://api.spoonacular.com/recipes/findByIngredients?'
              + ingredients
              + '&number='
              + NUM_OF_RESULTS.toString()
              + "?apikey="
              + API_KEY;

    //fetch the data and re-render the recipesResults once finished
    fetch(url)
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_RECIPES_SUCCESS,
          payload: ['test']
        });
      })
      .catch((error) => console.log(error));
  };
};
