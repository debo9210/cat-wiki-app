import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  allCatBreedsReducer,
  getSearchedBreedsReducer,
  updateSearchedBreedsReducer,
  catBreedInfoReducer,
  catBreedImageReducer,
} from './redux/reducers/CatBreedsReducers';

const reducers = combineReducers({
  allCatBreeds: allCatBreedsReducer,
  searchedBreeds: getSearchedBreedsReducer,
  updateSearchedBreeds: updateSearchedBreedsReducer,
  catBreedInfo: catBreedInfoReducer,
  catBreedImage: catBreedImageReducer,
});

const initialState = {};

const middleware = [thunk];

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(reducers, initialState, devTools);

export default store;
