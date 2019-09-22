import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text
} from 'react-native';
import RecipeListItem from './RecipeListItem';

class RecipesList extends Component {
  render() {
    return(
      <View style={styles.viewStyle}>
        <FlatList
          style={styles.flatListStyle}
          data={this.props.recipes}
          renderItem = {({item, index}) =>
            <RecipeListItem
              recipe={this.props.recipes[index]}
            />
          }
          keyExtractor = {(item,index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    alignItems: 'center',
    width: '100%',
    flex: 1
  }
}

export default RecipesList;
