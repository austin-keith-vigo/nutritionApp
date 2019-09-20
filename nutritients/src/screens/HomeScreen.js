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

//Houses a search button and list to present
//values of the search button
class HomeScreen extends Component{
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
