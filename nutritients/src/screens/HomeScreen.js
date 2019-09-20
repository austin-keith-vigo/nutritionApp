import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class HomeScreen extends Component{
  render(){
    return(
      <View style={styles.viewStyle}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'blue'
  }
});

export default HomeScreen;
