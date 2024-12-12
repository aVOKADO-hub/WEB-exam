const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

// Статична сторінка
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
