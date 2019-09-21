import React, { Component } from 'react';
import {
  View,
  FlatList,
  Button
} from 'react-native';
import { connect } from 'react-redux';

//Used components
import SearchBar from './SearchBar';

//actions
import {
  addIngredient,
  removeIngredient 
} from './../actions';

class SearchBarsList extends Component{

  //Adds a new search bar to the flatList
  addButtonPressed() {
    this.props.addIngredient(this.props.numOfSearchBars);
  }

  //Removes the last ingredient
  removeButtonPressed() {
    this.props.removeIngredient(this.props.numOfSearchBars);
  }

  //Controls how many searchBars to render
  renderFlatList() {
    let flatListData = [];
    for (index = 0; index < this.props.numOfSearchBars; ++index) {
      flatListData.push({key: index.toString(), searchBar: <SearchBar/>});
    }

    return (
      <FlatList
        data={flatListData}
        renderItem = {({item}) => item.searchBar}
        keyExtractor = {(item) => item.key}
      />
    );
  }

  render() {
    return(
      <View>
        {this.renderFlatList()}
        <Button
          title="New Ingredient"
          onPress={this.addButtonPressed.bind(this)}
        />
        <Button
          title="Remove Ingredient"
          onPress={this.removeButtonPressed.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    numOfSearchBars: state.searchBars.numOfSearchBars
  };
}

const actions = {
  addIngredient,
  removeIngredient
};

export default connect(mapStateToProps, actions)(SearchBarsList);
