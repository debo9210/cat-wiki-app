import React from 'react';
import { useSelector } from 'react-redux';
import { mostSearchedBreeds } from '../utils/MostSearchedCats';
import tempImg from '../images/image3.png';

const TopBreedPage = () => {
  const { breedNames } = useSelector((state) => state.searchedBreeds);

  const { catBreedsArray } = useSelector((state) => state.allCatBreeds);

  let searchedCats = [];
  if (catBreedsArray) {
    if (breedNames) {
      const searchedBreeds = mostSearchedBreeds(breedNames[0].searchNames);
      for (let i = 0; i < searchedBreeds.length; i++) {
        for (let j = 0; j < catBreedsArray.length; j++) {
          if (searchedBreeds[i] === catBreedsArray[j].name) {
            searchedCats.push(catBreedsArray[j]);
          }
        }
      }
    }
  }

  const topSearchResult = searchedCats.slice(0, 10).map((search, index) => (
    <div className='SearchedBreed' key={index}>
      <div
        className='SearchedBreedImage'
        style={{ backgroundImage: `url(${search.image.url})` }}
      ></div>

      <div className='SearchedBreedInfo'>
        <h3 className='SearchedBreedName'>
          {index + 1}. {search.name}
        </h3>
        <p className='SearchedBreedAbout'>{search.description}</p>
      </div>
    </div>
  ));

  return (
    <div className='TopBreedContainer'>
      <h3 className='SearchedBreedHeading'>Top 10 most searched breeds</h3>

      <div className='TopBreed'>{topSearchResult}</div>
    </div>
  );
};

export default TopBreedPage;
