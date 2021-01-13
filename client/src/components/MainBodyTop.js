import React from 'react';
import HeroImage from '../images/HeroImagemd.png';
import JumbotronLogo from '../images/CatwikiWhiteLogo.svg';

const MainBodyTop = ({
  dropDownRef,
  showDropDown,
  inputRef,
  DropDownLinkContainerRef,
  catName,
  topBreed,
  seeMorePage,
}) => {
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
              onKeyUp={filterSearch}
              type='text'
              placeholder='Enter your breed'
              ref={inputRef}
            />
            <i
              onClick={() => dropDownRef.current.classList.toggle('Show')}
              className='material-icons SearchIcon'
            >
              search
            </i>
          </div>

          <div className='DropDown' ref={dropDownRef}>
            <div
              className='DropDownLinkContainer'
              ref={DropDownLinkContainerRef}
            >
              {catName}
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
              <button onClick={seeMorePage}>see more</button>
              <i className='material-icons'>trending_flat</i>
            </div>
          </div>

          <div className='BreedImageDisplay'>{topBreed}</div>
        </div>
      </div>
    </div>
  );
};

export default MainBodyTop;
