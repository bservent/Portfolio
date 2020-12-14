
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home')
});

app.listen(3500, () => {
  console.log("Working off port 3500");
});

