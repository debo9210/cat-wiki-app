import axios from 'axios';
import {
  GET_ALL_BREEDS_FAIL,
  GET_ALL_BREEDS_REQUEST,
  GET_ALL_BREEDS_SUCCESS,
  GET_BREED_IMAGE_FAIL,
  GET_BREED_IMAGE_REQUEST,
  GET_BREED_IMAGE_SUCCESS,
  GET_BREED_INFO_FAIL,
  GET_BREED_INFO_REQUEST,
  GET_BREED_INFO_SUCCESS,
  GET_SEARCH_BREEDS_FAIL,
  GET_SEARCH_BREEDS_REQUEST,
  GET_SEARCH_BREEDS_SUCCESS,
  UPDATE_SEARCH_BREEDS_TO_DB_FAIL,
  UPDATE_SEARCH_BREEDS_TO_DB_REQUEST,
  UPDATE_SEARCH_BREEDS_TO_DB_SUCCESS,
} from '../constants';

export const getAllCatBreeds = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_BREEDS_REQUEST });

    const { data } = await axios.get('/api/cat-wiki/breeds');

    dispatch({
      type: GET_ALL_BREEDS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_BREEDS_FAIL,
      payload: error.response.data,
    });
  }
};

export const getCatBreedInfo = (breedName) => async (dispatch) => {
  try {
    dispatch({ type: GET_BREED_INFO_REQUEST });

    const { data } = await axios.get(`/api/cat-wiki/breed-type/${breedName}`);

    dispatch({
      type: GET_BREED_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BREED_INFO_FAIL,
      payload: error.response,
    });
  }
};

export const getCatBreedImage = (imageID) => async (dispatch) => {
  try {
    dispatch({ type: GET_BREED_IMAGE_REQUEST });

    const { data } = await axios.get(`/api/cat-wiki/images/${imageID}`);

    dispatch({
      type: GET_BREED_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BREED_IMAGE_FAIL,
      payload: error.response,
    });
  }
};

export const getSearchedBreeds = () => async (dispatch) => {
  try {
    dispatch({ type: GET_SEARCH_BREEDS_REQUEST });

    const { data } = await axios.get('/api/cat-wiki/search-names');

    dispatch({
      type: GET_SEARCH_BREEDS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SEARCH_BREEDS_FAIL,
      payload: error.response,
    });
  }
};

export const updateSearchedBreeds = (name) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_SEARCH_BREEDS_TO_DB_REQUEST });

    const { data } = await axios.put(`/api/cat-wiki/search-name/${name}`);

    dispatch({
      type: UPDATE_SEARCH_BREEDS_TO_DB_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SEARCH_BREEDS_TO_DB_FAIL,
      payload: error.response,
    });
  }
};
