import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

//Used Component
import {
  SearchBarsList
} from './../components';

const API_KEY = "e55c80982c814318ba1ad19d7708978e";

//Presents an a list of search bars. Each search bar is 1 ingredient
class HomeScreen extends Component{

  render(){
    return(
      <View style={styles.viewStyle}>
        <SearchBarsList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  }
});

export default HomeScreen;
