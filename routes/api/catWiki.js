const express = require('express');
const axios = require('axios');

const router = express.Router();

const catAuth = require('../../config/keys').catAuth;

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

// @ route GET /api/cat-wiki/breeds
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
      `https://api.thecatapi.com/v1/images/search?breed_id=${req.params.breed_id}&limit=8`,
      config
    )
    .then((response) => {
      const images = response.data.map((image) => image.url);
      return res.json({ images: images });
    })
    .catch((error) => res.status(404).json(error));
});

module.exports = router;
