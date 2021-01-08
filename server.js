const express = require('express');

const catWiki = require('./routes/api/catWiki');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to cat wiki');
});

app.use('/api/cat-wiki', catWiki);

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
