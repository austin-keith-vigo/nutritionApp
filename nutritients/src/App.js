import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//Screens
import {
  HomeScreen,
  RecipesResultsScreen
} from './screens';

//Navigation Setup
let MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    RecipesResults: RecipesResultsScreen
  },
  {
    intialRouteName: "Home"
  }
);
let Navigation = createAppContainer(MainStack);

//App component
const App = () => {
  return(
    <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <Navigation/>
    </Provider>
  );
};

export default App;
