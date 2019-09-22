import React, { Component } from 'react';
import {
  View,
  FlatList,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { RecipesList } from './../components';

class RecipesResultsScreen extends Component {

  //Hide the navigation header
  static navigationOptions = {
    headerTitle: '',
    headerStyle: {
      height: 0,
      borderBottomWidth: 0
    }
  };

  render() {
    return (
      <View style={styles.viewStyle}>
        <RecipesList
          recipes={this.props.recipesResults}
        />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1
  }
};

const mapStateToProps = state => {
  return {
    recipesResults: state.recipesResults.recipesResultsData
  };
};
export default connect(mapStateToProps)(RecipesResultsScreen);
