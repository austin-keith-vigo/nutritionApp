import { combineReducers } from 'redux';
import SearchBars from './SearchBarsReducers';
import RecipesResults from './RecipesResultsReducers';

export default combineReducers({
  searchBars: SearchBars,
  recipesResults: RecipesResults
});
