import React from 'react';

const CatRatingComponent = ({ title, ratingRef }) => {
  return (
    <div className='CatRating'>
      <p className='CatRatingTitle RatingName'>
        <span>{title}</span>
      </p>

      <div className='RatingBar' ref={ratingRef}>
        <div className='CatBar'></div>
        <div className='CatBar'></div>
        <div className='CatBar'></div>
        <div className='CatBar'></div>
        <div className='CatBar'></div>
      </div>
    </div>
  );
};

export default CatRatingComponent;
