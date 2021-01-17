import React, { useRef } from 'react';
import JumbotronLogo from '../images/CatwikiWhiteLogo.svg';
import JumbotronLogoMobile from '../images/CatwikiLogoMobile.svg';

const MainBodyTop = ({
  dropDownRef,
  showDropDown,
  inputRef,
  DropDownLinkContainerRef,
  catName,
  topBreed,
  seeMorePage,
  dropDownMobileRef,
}) => {
  const inputRefMobile = useRef(null);
  const DropDownLinkContainerMobileRef = useRef(null);

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

  const filterSearchMobile = () => {
    let filter, pValue, i, txtValue;

    filter = inputRefMobile.current.value.toUpperCase();
    pValue = Array.from(DropDownLinkContainerMobileRef.current.childNodes);

    for (i = 0; i < pValue.length; i++) {
      txtValue = pValue[i].textContent || pValue[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        pValue[i].style.display = '';
      } else {
        pValue[i].style.display = 'none';
      }
    }

    // console.log(DropDownLinkContainerMobileRef.current.childNodes);
  };

  const clearHandler = () => {
    dropDownMobileRef.current.style.display = 'none';
    // inputRefMobile.current.value = '';
  };

  return (
    <div className='MainBodyTopContainer'>
      <div className='Jumbotron'>
        <div className='JumbotronDetails'>
          <img className='JumbotronLogo' src={JumbotronLogo} alt='Brand' />
          <img
            className='JumbotronLogoMobile'
            src={JumbotronLogoMobile}
            alt='Brand'
          />
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

          <div className='MobileInputGroup'>
            <div className='InputGroupMobile'>
              <p className='InputSearchMobile'>Search</p>
              <i
                onClick={() =>
                  (dropDownMobileRef.current.style.display = 'block')
                }
                className='material-icons SearchIconMobile'
              >
                search
              </i>
            </div>
          </div>

          <div className='DropDown' ref={dropDownRef}>
            <div
              className='DropDownLinkContainer'
              ref={DropDownLinkContainerRef}
            >
              {catName}
            </div>
          </div>

          <div className='DropDownMobile' ref={dropDownMobileRef}>
            <div className='ClearIconContainer'>
              <i onClick={clearHandler} className='material-icons ClearIcon'>
                clear
              </i>
            </div>

            <div className='InputGroupMobile2'>
              <input
                className='SearchInputMobile'
                // onFocus={showDropDown}
                onKeyUp={filterSearchMobile}
                type='text'
                placeholder='Enter your breed'
                ref={inputRefMobile}
              />

              <i className='material-icons SearchIconMobile'>search</i>
            </div>

            <div
              className='DropDownLinkContainerMobile'
              ref={DropDownLinkContainerMobileRef}
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
            <div className='SeeMoreLink SeeMoreHide'>
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
