import React, { Component } from 'react';
import {
  View,
  FlatList,
  Button
} from 'react-native';
import { connect } from 'react-redux';

class RecipesResultsScreen extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        {console.log(this.props.recipesResults)}
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
