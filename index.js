const express = require('express');
const app = express();

//create route handler
app.get('/', (req,res) => {
  res.send({bye:'buddy'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//localhost:5000
