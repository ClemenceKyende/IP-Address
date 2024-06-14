const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.send(`Your IP address is: ${clientIp}`);
  console.log(`IP address logged: ${clientIp}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
