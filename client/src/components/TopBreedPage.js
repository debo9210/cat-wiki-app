import React from 'react';
import tempImg from '../images/image3.png';

const TopBreedPage = () => {
  const topSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const topSearchResult = topSearch.map((search, index) => (
    <div className='SearchedBreed' key={index}>
      <div
        className='SearchedBreedImage'
        style={{ backgroundImage: `url(${tempImg})` }}
      ></div>

      <div className='SearchedBreedInfo'>
        <h3 className='SearchedBreedName'>{index + 1}. Bengal</h3>
        <p className='SearchedBreedAbout'>
          Bengals are a lot of fun to live with, but they're definitely not the
          cat for everyone, or for first-time cat owners. Extremely intelligent,
          curious and active, they demand a lot of interaction and woe betide
          the owner who doesn't provide it.
        </p>
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
