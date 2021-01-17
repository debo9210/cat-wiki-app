import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCatBreedInfo,
  getCatBreedImage,
} from '../redux/actions/CatBreedActions';
import tempImg from '../images/image2.png';
import CatRating from './CatRatingComponent';
import Loader from './Loader';

const CatInfoPage = ({ match }) => {
  const breedName = match.params.name;
  const breedID = match.params.id;
  const dispatch = useDispatch();

  // const [catRatingArray, setCatRatingArray] = useState([]);

  const { breedDetails, loading } = useSelector((state) => state.catBreedInfo);

  const { catImages } = useSelector((state) => state.catBreedImage);

  const adaptabilityRef = useRef(null);
  const affectionRef = useRef(null);
  const childFriendlyRef = useRef(null);
  const groomingRef = useRef(null);
  const intelligenceRef = useRef(null);
  const healthIssuesRef = useRef(null);
  const socialNeedsRef = useRef(null);
  const strangerFriendlyRef = useRef(null);

  // const ratingRef = useRef([]);

  let catInfoDisplay;
  if (breedDetails) {
    // console.log(breedDetails);
    setTimeout(() => {
      const adaptability = Array.from(adaptabilityRef.current.childNodes);
      const affection = Array.from(affectionRef.current.childNodes);
      const childFriendly = Array.from(childFriendlyRef.current.childNodes);
      const grooming = Array.from(groomingRef.current.childNodes);
      const intelligence = Array.from(intelligenceRef.current.childNodes);
      const healthIssues = Array.from(healthIssuesRef.current.childNodes);
      const socialNeeds = Array.from(socialNeedsRef.current.childNodes);
      const strangerFriendly = Array.from(
        strangerFriendlyRef.current.childNodes
      );

      for (let i = 0; i < adaptability.length; i++) {
        for (let j = 0; j < breedDetails[0].adaptability; j++) {
          adaptability[j].classList.add('CatBarFill');
        }
      }

      for (let i = 0; i < affection.length; i++) {
        for (let j = 0; j < breedDetails[0].affection_level; j++) {
          affection[j].classList.add('CatBarFill');
        }
      }

      for (let i = 0; i < childFriendly.length; i++) {
        for (let j = 0; j < breedDetails[0].child_friendly; j++) {
          childFriendly[j].classList.add('CatBarFill');
        }
      }

      for (let i = 0; i < grooming.length; i++) {
        for (let j = 0; j < breedDetails[0].grooming; j++) {
          grooming[j].classList.add('CatBarFill');
        }
      }

      for (let i = 0; i < intelligence.length; i++) {
        for (let j = 0; j < breedDetails[0].intelligence; j++) {
          intelligence[j].classList.add('CatBarFill');
        }
      }

      for (let i = 0; i < healthIssues.length; i++) {
        for (let j = 0; j < breedDetails[0].health_issues; j++) {
          healthIssues[j].classList.add('CatBarFill');
        }
      }

      for (let i = 0; i < socialNeeds.length; i++) {
        for (let j = 0; j < breedDetails[0].social_needs; j++) {
          socialNeeds[j].classList.add('CatBarFill');
        }
      }

      for (let i = 0; i < strangerFriendly.length; i++) {
        for (let j = 0; j < breedDetails[0].stranger_friendly; j++) {
          strangerFriendly[j].classList.add('CatBarFill');
        }
      }
    }, 2000);

    catInfoDisplay = (
      <div className='CatInfoDisplay'>
        <div
          className='CatInfoImage'
          style={{
            backgroundImage: `url(${
              catImages ? catImages.images[0] : tempImg
            })`,
          }}
        ></div>

        <div className='CatInfo'>
          <h3 className='CatInfoHeading'>{breedDetails[0].name}</h3>
          <div className='CatAboutContainer'>
            <p className='CatAbout'>{breedDetails[0].description}</p>
          </div>

          <p className='RatingName'>
            <span>Temperament: </span> {breedDetails[0].temperament}
          </p>

          <p className='RatingName'>
            <span>Origin: </span> {breedDetails[0].origin}
          </p>

          <p className='RatingName'>
            <span>Life Span: </span> {breedDetails[0].life_span}
          </p>

          <CatRating ratingRef={adaptabilityRef} title='Adaptability:' />
          <CatRating title='Affection level:' ratingRef={affectionRef} />
          <CatRating title='Child Friendly:' ratingRef={childFriendlyRef} />
          <CatRating title='Grooming:' ratingRef={groomingRef} />
          <CatRating title='Intelligence:' ratingRef={intelligenceRef} />
          <CatRating title='Health issues:' ratingRef={healthIssuesRef} />
          <CatRating title='Social needs:' ratingRef={socialNeedsRef} />
          <CatRating
            title='Stranger friendly:'
            ratingRef={strangerFriendlyRef}
          />
        </div>
      </div>
    );
  }

  let morePhotos;
  if (catImages) {
    morePhotos = catImages.images
      .slice(1)
      .map((img, i) => (
        <div
          key={i}
          className='MorePhoto'
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ));
  }

  // work on this later....
  // useEffect(() => {
  //   if (breedDetails) {
  //     setCatRatingArray((catRatingArray) => [
  //       ...catRatingArray,
  //       { Adaptability: breedDetails[0].adaptability },
  //       { 'Affection level': breedDetails[0].affection_level },
  //       { 'Child Friendly': breedDetails[0].child_friendly },
  //       { Grooming: breedDetails[0].grooming },
  //       { Intelligence: breedDetails[0].intelligence },
  //       { 'Health issues': breedDetails[0].health_issues },
  //       { 'Social needs': breedDetails[0].social_needs },
  //       { 'Stranger friendly': breedDetails[0].stranger_friendly },
  //     ]);
  //   }
  // }, [breedDetails]);

  useEffect(() => {
    // setCatRatingArray([]);
    dispatch(getCatBreedInfo(breedName));
    dispatch(getCatBreedImage(breedID));
  }, [dispatch, breedName, breedID]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='CatInfoContainer'>
          {catInfoDisplay}

          <div className='CatInfoPhotos'>
            <h3 className='PhotoHeading'>Other photos</h3>

            <div className='MorePhotosContainer'>{morePhotos}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatInfoPage;
