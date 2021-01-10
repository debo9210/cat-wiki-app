import React from 'react';
import tempImg from '../images/image2.png';
import CartRating from './CatRatingComponent';

const CatInfoPage = () => {
  const tempArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const morePhoto = tempArray.map((p, i) => (
    <div
      key={i}
      className='MorePhoto'
      style={{ backgroundImage: `url(${tempImg})` }}
    ></div>
  ));

  return (
    <>
      <div className='CatInfoContainer'>
        <div className='CatInfoDisplay'>
          <div
            className='CatInfoImage'
            style={{ backgroundImage: `url(${tempImg})` }}
          ></div>

          <div className='CatInfo'>
            <h3 className='CatInfoHeading'>Bengal</h3>
            <p className='CatAbout'>
              Bengals are a lot of fun to live with, but they're definitely not
              the cat for everyone, or for first-time cat owners. Extremely
              intelligent, curious and active, they demand a lot of interaction
              and woe betide the owner who doesn't provide it.
            </p>

            <p className='RatingName'>
              <span>Temperament: </span> Alert, Agile, Energetic, Demanding,
              Intelligent
            </p>

            <p className='RatingName'>
              <span>Origin: </span> United States
            </p>

            <p className='RatingName'>
              <span>Life Span: </span> 12 - 15 years
            </p>

            <CartRating title='Adaptability:' />
            <CartRating title='Affection level:' />
            <CartRating title='Child Friendly:' />
            <CartRating title='Grooming:' />
            <CartRating title='Intelligence:' />
            <CartRating title='Health issues:' />
            <CartRating title='Social needs:' />
            <CartRating title='Stranger friendly:' />
          </div>
        </div>

        <div className='CatInfoPhotos'>
          <h3 className='PhotoHeading'>Other photos</h3>

          <div className='MorePhotosContainer'>{morePhoto}</div>
        </div>
      </div>
    </>
  );
};

export default CatInfoPage;
