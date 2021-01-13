const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const catWiki = require('./routes/api/catWiki');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome to cat wiki');
});

app.use('/api/cat-wiki', catWiki);

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
