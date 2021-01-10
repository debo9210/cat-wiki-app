import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../images/HeroImagemd.png';
import JumbotronLogo from '../images/CatwikiWhiteLogo.svg';
import tempImg from '../images/image1.png';

const MainBodyTop = ({ dropDownRef, showDropDown, hideDropDown, inputRef }) => {
  const DropDownLinkContainerRef = useRef(null);

  const filterSearch = () => {
    let filter, pValue, i, txtValue;

    filter = inputRef.current.value.toUpperCase();
    pValue = Array.from(DropDownLinkContainerRef.current.childNodes);

    for (i = 0; i < pValue.length; i++) {
      txtValue = pValue[i].textContent || pValue[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        pValue[i].style.display = '';
      } else {
        pValue[i].style.display = 'none';
      }
    }
  };

  return (
    <div className='MainBodyTopContainer'>
      <div
        className='Jumbotron'
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className='JumbotronDetails'>
          <img className='JumbotronLogo' src={JumbotronLogo} alt='Brand' />
          <p className='JumbotronText'>Get to know more about your cat breed</p>
          <div className='InputGroup'>
            <input
              className='SearchInput'
              onFocus={showDropDown}
              onBlur={hideDropDown}
              onKeyUp={filterSearch}
              type='text'
              placeholder='Enter your breed'
              ref={inputRef}
            />
            <i className='material-icons SearchIcon'>search</i>
          </div>

          <div className='DropDown' ref={dropDownRef}>
            <div
              className='DropDownLinkContainer'
              ref={DropDownLinkContainerRef}
            >
              <Link to='/cat-info'>
                <p className='DropDownLink'>American Bobtail</p>
              </Link>

              <Link to='/cat-info'>
                <p className='DropDownLink'>American Curl</p>
              </Link>

              <Link to='/cat-info'>
                <p className='DropDownLink'>American Shorthair</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='BreedsDisplayContainer'>
        <div className='BreedsDisplay'>
          <p className='BreedDisplayText'>Most Searched Breeds</p>
          <hr className='HR' />
          <div className='DiscoverBreeds'>
            <h2 className='BreedsHeading'>66+ Breeds For you to discover</h2>
            <div className='SeeMoreLink'>
              <a href='#'>see more</a>
              <i className='material-icons'>trending_flat</i>
            </div>
          </div>

          <div className='BreedImageDisplay'>
            <div className='BreedImageContainer'>
              <div
                className='BreedImage'
                style={{ backgroundImage: `url(${tempImg})` }}
              ></div>
              <p className='BreedName'>Bengal</p>
            </div>

            <div className='BreedImageContainer'>
              <div
                className='BreedImage'
                style={{ backgroundImage: `url(${tempImg})` }}
              ></div>
              <p className='BreedName'>Bengal</p>
            </div>

            <div className='BreedImageContainer'>
              <div
                className='BreedImage'
                style={{ backgroundImage: `url(${tempImg})` }}
              ></div>
              <p className='BreedName'>Bengal</p>
            </div>

            <div className='BreedImageContainer'>
              <div
                className='BreedImage'
                style={{ backgroundImage: `url(${tempImg})` }}
              ></div>
              <p className='BreedName'>Bengal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBodyTop;
