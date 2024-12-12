const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Обробка POST-запиту для отримання даних
app.post('/api/data', (req, res) => {
    const { name, age } = req.body;

    // Логування даних на сервері
    console.log(`Отримано дані: Ім'я: ${name}, Вік: ${age}`);

    // Відправка відповіді клієнту
    res.json({ message: 'Дані отримані успішно!', name, age });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
