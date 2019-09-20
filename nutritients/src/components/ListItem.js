import React, { Component } from 'react';
import {
  View
} from 'react-native';

class ListItem extends Component {
  render(){
    return(
      <View>
        {console.log(this.props)}
      </View>
    );
  }
}

export default ListItem;
