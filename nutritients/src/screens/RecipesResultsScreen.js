import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';

class RecipesResultsScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: 'red'
  }
};

const mapStateToProps = state => {
  return {
    recipesResults: state.recipesResults.recipesResultsData
  };
};
export default connect(mapStateToProps)(RecipesResultsScreen);
