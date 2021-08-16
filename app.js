const express = require('express');

const app = express();

// http://localhost:3000/test
app.get('/test', (req, res) => {
  const output = { value: 'Hello #34!' };

  res.send(output);
});

app.listen(3000, () => {
  console.log('Server runs on port 3000');
});
