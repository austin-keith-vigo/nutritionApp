import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

//Displays the results of a search bar
class SearchResultsList extends Component{

  //Controls how to render the item for the list
  renderItem(item){
    return <ListItem item={item}/>
  }


  render(){
    return(
      <View style={styles.viewStyle}>
        <FlatList
          data={this.props.searchResults}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
  }
});

const mapStateToProps = state => {
  return { searchResults: state.searchResults}
};

export default connect(mapStateToProps)(SearchResultsList);
