import React, { Component } from 'react';
import {
  View,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { onChangeText } from './../actions';

class SearchBar extends Component{

  //Updates the value of the states with text in the search bar
  onChangeText(text) {
    this.props.onChangeText(text, this.props.index, this.props.activeSearchBars);
  }
  render() {
    return(
      <TextInput
        style={styles.viewStyle}
        placeholder="Ingredient"
        onChangeText={(text) => this.onChangeText(text)}
      />
    );
  }
}

const styles = {
  viewStyle: {
    height: 40,
    width: "100%"
  }
};

const mapStateToProps = state => {
  const { activeSearchBars } = state.searchBars;
  return {
    activeSearchBars: activeSearchBars
  };
}

const actions = {
  onChangeText
};

export default connect(mapStateToProps, actions)(SearchBar);
