const express = require('express');
const app = express();

//create route handler
app.get('/', (req,res) => {
  res.send({hi:'there'});
});

app.listen(5000);

//localhost:5000
