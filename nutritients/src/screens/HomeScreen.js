import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

//Used Components
import {
  SearchResultsList
} from './../components';

const API_KEY = "e55c80982c814318ba1ad19d7708978e";

//Houses a search button and list to present
//values of the search button
class HomeScreen extends Component{

  constructor(props){
    super(props);

    console.log('testing spoonacular');

    fetch("https://api.spoonacular.com/recipes/search?apiKey=e55c80982c814318ba1ad19d7708978e&query=cheese&number=2")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.results);
    })
    .catch((error) => {
      console.error(error);
    });

  }
  render(){
    return(
      <View style={styles.viewStyle}>
        <SearchResultsList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  }
})

export default HomeScreen;
