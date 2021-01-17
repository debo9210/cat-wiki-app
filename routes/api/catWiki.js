const express = require('express');
const axios = require('axios');

const router = express.Router();

const catAuth = require('../../config/keys').catAuth;

//model config
const CatWiki = require('../../model/catWikiSearch');

const config = {
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': catAuth,
  },
};

// @ route GET /api/cat-wiki/breeds
// @ description get all cat breeds
// @ access Public
router.get('/breeds', (req, res) => {
  axios
    .get(`https://api.thecatapi.com/v1/breeds`, config)
    .then((response) => {
      return res.json(response.data);
    })
    .catch((error) => res.status(404).json(error));
});

// @ route GET /api/cat-wiki/breed-type/:breed_name
// @ description get cat by breed name
// @ access Public
router.get('/breed-type/:breed_name', (req, res) => {
  axios
    .get(
      `https://api.thecatapi.com/v1/breeds/search?q=${req.params.breed_name}`,
      config
    )
    .then((response) => {
      return res.json(response.data);
    })
    .catch((error) => res.status(404).json(error));
});

// @ route GET /api/cat-wiki/images/breed_id
// @ description get cat images by breed
// @ access Public
router.get('/images/:breed_id', (req, res) => {
  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?breed_id=${req.params.breed_id}&limit=9`,
      config
    )
    .then((response) => {
      const images = response.data.map((image) => image.url);
      return res.json({ images: images });
    })
    .catch((error) => res.status(404).json(error));
});

// @ route Get /api/cat-wiki/search-names
// @ description get searched names from db
// @ access Public
router.get('/search-names', (req, res) => {
  CatWiki.find({ name: 'breedNames' })
    .then((name) => {
      return res.json(name);
    })
    .catch((err) => res.status(404).json({ msg: 'No data found' }));
});

// @ route Put /api/cat-wiki/search/:catName
// @ description update searched names in db
// @ access Public
router.put('/search-name/:catName', (req, res) => {
  CatWiki.findOneAndUpdate({ name: 'breedNames' })
    .then((name) => {
      name.searchNames.unshift(req.params.catName);

      name.save().then((name) => res.json(name));
    })
    .catch((err) => res.status(404).json(err));

  // searchName.save().then((name) => res.json(name));
  // res.json(searchName);
});

module.exports = router;
