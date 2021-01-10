import React, { useRef } from 'react';
import MainBodyTop from './MainBodyTop';
import MainBodyBottom from './MainBodyBottom';

const MainBody = () => {
  const dropDownRef = useRef(null);
  const inputRef = useRef(null);

  const showDropDownHandler = () => {
    dropDownRef.current.classList.add('Show');
  };

  const hideDropDownHandler = () => {
    dropDownRef.current.classList.remove('Show');
  };

  return (
    <main className='MainBodyContainer'>
      <MainBodyTop
        dropDownRef={dropDownRef}
        inputRef={inputRef}
        showDropDown={showDropDownHandler}
        hideDropDown={hideDropDownHandler}
      />
      <MainBodyBottom />
    </main>
  );
};

export default MainBody;
