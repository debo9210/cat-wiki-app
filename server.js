const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const catWiki = require('./routes/api/catWiki');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Connected to database'))
  .catch((err) => console.log(err));

// app.get('/', (req, res) => {
//   res.send('Welcome to cat wiki');
// });

app.use('/api/cat-wiki', catWiki);

//server static assets if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
