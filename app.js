const express = require('express');
const path = require('path');
const port = 3000

// Create a new Express application.
var app = express();
app.use('/', express.static(path.join(__dirname, 'client/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})