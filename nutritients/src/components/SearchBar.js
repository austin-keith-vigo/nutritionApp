import React, { Component } from 'react';
import {
  View
} from 'react-native';

class SearchBar extends Component{
  render() {
    return(
      <View style={styles.viewStyle}/>
    );
  }
}

const styles = {
  viewStyle: {
    height: 40,
    width: "100%",
    backgroundColor: 'red'
  }
};

export default SearchBar;
