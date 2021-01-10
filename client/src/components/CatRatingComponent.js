import React from 'react';

const CatRatingComponent = ({ title }) => {
  return (
    <div className='CatRating'>
      <p className='CatRatingTitle RatingName'>
        <span>{title}</span>
      </p>

      <div className='RatingBar'>
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
