import {
  GET_ALL_BREEDS_FAIL,
  GET_ALL_BREEDS_REQUEST,
  GET_ALL_BREEDS_SUCCESS,
  GET_SEARCH_BREEDS_FAIL,
  GET_SEARCH_BREEDS_REQUEST,
  GET_SEARCH_BREEDS_SUCCESS,
  UPDATE_SEARCH_BREEDS_TO_DB_FAIL,
  UPDATE_SEARCH_BREEDS_TO_DB_REQUEST,
  UPDATE_SEARCH_BREEDS_TO_DB_SUCCESS,
} from '../constants';

export const allCatBreedsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_BREEDS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_BREEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        catBreedsArray: action.payload,
      };
    case GET_ALL_BREEDS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getSearchedBreedsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SEARCH_BREEDS_REQUEST:
      return { ...state, loading: true };
    case GET_SEARCH_BREEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        breedNames: action.payload,
      };
    case GET_SEARCH_BREEDS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateSearchedBreedsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_BREEDS_TO_DB_REQUEST:
      return { ...state, loading: true };
    case UPDATE_SEARCH_BREEDS_TO_DB_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedBreeds: action.payload,
        success: true,
      };
    case UPDATE_SEARCH_BREEDS_TO_DB_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
