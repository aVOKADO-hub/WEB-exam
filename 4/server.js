const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Middleware для обробки JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Статичні файли
app.use(express.static(path.join(__dirname, 'public')));

// Головна сторінка
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
