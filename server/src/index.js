// Root file
const express = require('express');
const app = express();

app.get('/', (req, res) => {

});

app.listen(3000, () => {
  console.log('Rendering Server Running on Port 3000!');
})
