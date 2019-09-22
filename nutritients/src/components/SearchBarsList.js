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
  search
} from './../actions';

class SearchBarsList extends Component{

  //Adds a new search bar to the flatList
  addButtonPressed() {
    this.props.addIngredient(this.props.activeSearchBars);
  }

  //Triggers search with the given ingredients
  searchButtonPressed() {
      this.props.search(this.props.activeSearchBars);
  }

  //Controls how many searchBars to render
  renderFlatList() {

    return (
      <FlatList
        data={this.props.activeSearchBars}
        renderItem = {({item}) => item.searchBar}
        keyExtractor = {(item,index) => index.toString()}
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
          title="Search"
          onPress={this.searchButtonPressed.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { activeSearchBars } = state.searchBars;
  return {
    activeSearchBars: activeSearchBars
  };
}

const actions = {
  addIngredient,
  search
};

export default connect(mapStateToProps, actions)(SearchBarsList);
