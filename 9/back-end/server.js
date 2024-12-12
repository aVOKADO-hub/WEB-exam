const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.static('client/build')); // Сервуємо фронтенд

app.get('/', (req, res) => {
  res.send('Welcome to Color Flip App!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
