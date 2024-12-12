const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Дані військовослужбовців
const servicemen = [
    { rank: 'сержант', fullName: 'Степанов Степан Степанович', age: 33 },
    { rank: 'лейтенант', fullName: 'Федоров Федір Федорович', age: 25 },
    { rank: 'майор', fullName: 'Антоненко Антон Антонович', age: 31 }
];

// API для отримання списку військовослужбовців
app.get('/api/servicemen', (req, res) => {
    res.json(servicemen);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
