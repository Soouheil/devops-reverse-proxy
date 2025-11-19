const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.json({
    message: "Backend OK — served by Node.js",
    timestamp: new Date()
  });
});

app.get('/health', (req, res) => res.sendStatus(200));

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
