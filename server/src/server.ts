import express from 'express';

const app = express();

app.get('/health-check', (req, res) => {
  res.send('<h1>Healthy!</h1>');
});

app.listen(3001);
