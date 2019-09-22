import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';

class RecipesResultsScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}/>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'red'
  }
};

export default RecipesResultsScreen;
