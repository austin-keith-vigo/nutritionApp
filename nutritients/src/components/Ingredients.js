import React from 'react';
import {
  View,
  Text
} from 'react-native';


const createIngredientsString = (recipe) => {
  let ingredientsStr = '';

  for(index = 0; index < recipe.usedIngredientCount; ++index) {
    ingredientsStr += (recipe.usedIngredients[index].original + '\n');
  }
  for(index = 0; index < recipe.missedIngredients.length; ++index) {
    ingredientsStr += (recipe.missedIngredients[index].original + '\n');
  }
  return ingredientsStr;
};

const Ingredients = (props) => {
  return(
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{createIngredientsString(props.recipe)}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    width: '100%'
  },
  textStyle: {
    marginLeft: 5,
    marginRight: 5
  }
};

export default Ingredients;
