const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to cat wiki');
});

const port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server running @ port ${port}`);
});
