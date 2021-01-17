import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainBodyTop from './MainBodyTop';
import MainBodyBottom from './MainBodyBottom';
import Loader from './Loader';
import {
  getAllCatBreeds,
  getSearchedBreeds,
  updateSearchedBreeds,
} from '../redux/actions/CatBreedActions';
import { mostSearchedBreeds } from '../utils/MostSearchedCats';

const MainBody = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  //   console.log(history.location);

  const { catBreedsArray } = useSelector((state) => state.allCatBreeds);

  const { breedNames, loading } = useSelector((state) => state.searchedBreeds);

  //   console.log(
  //     mostSearchedCats(JSON.parse(localStorage.getItem('catBreedArr')))
  //   );

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

  const topTenBreed = searchedCats.slice(0, 4).map((top) => (
    <div className='BreedImageContainer' key={top.id}>
      <div
        className='BreedImage'
        style={{ backgroundImage: `url(${top.image.url})` }}
      ></div>
      <p className='BreedName'>{top.name}</p>
    </div>
  ));

  const dropDownRef = useRef(null);
  const inputRef = useRef(null);
  const DropDownLinkContainerRef = useRef(null);
  const dropDownMobileRef = useRef(null);

  const mostSearched = (e) => {
    dispatch(updateSearchedBreeds(e.target.textContent));

    history.push(`/cat-info/${e.target.textContent}/${e.target.id}`);
  };

  const seeMorePageHandler = () => {
    history.push('/top-breeds');
  };

  let catName;
  if (catBreedsArray) {
    catName = catBreedsArray.map((cat) => (
      <p
        key={cat.id}
        onClick={mostSearched}
        className='DropDownLink'
        id={cat.id}
      >
        {cat.name}
      </p>
    ));
  }

  const showDropDownHandler = () => {
    dropDownRef.current.classList.add('Show');
  };

  useEffect(() => {
    dispatch(getAllCatBreeds());
    dispatch(getSearchedBreeds());
  }, [dispatch]);

  return (
    <main className='MainBodyContainer'>
      <MainBodyTop
        dropDownRef={dropDownRef}
        inputRef={inputRef}
        showDropDown={showDropDownHandler}
        DropDownLinkContainerRef={DropDownLinkContainerRef}
        catName={catName}
        topBreed={loading ? <Loader /> : topTenBreed}
        seeMorePage={seeMorePageHandler}
        dropDownMobileRef={dropDownMobileRef}
      />
      <MainBodyBottom />
    </main>
  );
};

export default MainBody;
