import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import { moreInfoButtonPressed } from './../actions';
import Ingredients from './Ingredients';

class RecipeListItem extends Component {

  //expands the card to present a view with more information
  onMoreInfoButtonPress() {
    this.props.moreInfoButtonPressed(this.props.recipe.id);
  }

  //Either render the more info button or the expanded info
  renderInfoView() {
    if (this.props.expandedRecipe == this.props.recipe.id) {
      return (
        <Ingredients recipe={this.props.recipe}/>
      );
    }
    return (
      <Button
        title="more info"
        onPress={this.onMoreInfoButtonPress.bind(this)}
      />
    );
  }

  render() {
    return(
      <View style={styles.viewStyle}>
        <Text style={styles.titleStyle}>{this.props.recipe.title}</Text>
        <Image
          style={styles.imageStyle}
          source={{uri: this.props.recipe.image}}
        />
        {this.renderInfoView()}
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    width: 300,
    marginTop: 30,
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5
  },
  imageStyle: {
    height: 200,
    width: 200,
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5
  }
};

const actions = {
  moreInfoButtonPressed
};

const mapStateToProps = state => {
  return {
    expandedRecipe: state.recipesResults.expandedRecipe
  };
}

export default connect(mapStateToProps, actions)(RecipeListItem);
