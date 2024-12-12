const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static('public'));
app.use(express.json());


let servicemen = [
    { rank: 'сержант', fullName: 'Степанов Степан Степанович', age: 33 },
    { rank: 'лейтенант', fullName: 'Федоров Федір Федорович', age: 25 },
    { rank: 'майор', fullName: 'Антоненко Антон Антонович', age: 31 },
];


app.get('/', (req, res) => {
    res.render('index', { servicemen });
});


app.post('/average-age', (req, res) => {
    const ages = req.body.ages;
    const average = ages.reduce((sum, age) => sum + age, 0) / ages.length;
    res.json({ average });
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
