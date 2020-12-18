
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

//-------- MIDDLEWARE ---------------//
//Serve Styling Files
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/resume', (req, res) => {
  res.render('resume')
});

app.listen(3500, () => {
  console.log("Working off port 3500");
});

