const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`My React App is listening on port: ${port}`)
})
