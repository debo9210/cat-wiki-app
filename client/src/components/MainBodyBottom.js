import React from 'react';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

const MainBodyBottom = () => {
  return (
    <div className='MainBodyBottomContainer'>
      <div className='AboutCat'>
        <hr className='HR' />
        <h2 className='AboutCatHeading'>Why should you have a cat?</h2>
        <p className='AboutCatText'>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <div className='SeeMoreLink'>
          <a
            className='ReadMoreLink'
            href='https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm'
            target='_blank'
            rel='noreferrer'
          >
            read more
          </a>
          <i className='material-icons'>trending_flat</i>
        </div>
      </div>

      <div className='CatImageContainer'>
        <div className='CatImageLeft'>
          <div
            className='CatImage c1'
            style={{ backgroundImage: `url(${image2})` }}
          ></div>

          <div
            className='CatImage c2'
            style={{ backgroundImage: `url(${image1})` }}
          ></div>
        </div>

        <div
          className='CatImage c3'
          style={{ backgroundImage: `url(${image3})` }}
        ></div>
      </div>
    </div>
  );
};

export default MainBodyBottom;
