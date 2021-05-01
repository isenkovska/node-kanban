const express = require('express')

const app = express();
const PORT = 3000;

let cards = [
        {id: '1', name: 'First Card', status: 'todo', priority: 2},
        {id: '2', name: 'Second Card', status: 'progress', priority: 5},
        {id: '3', name: 'Next Card', status: 'review', priority: 10},
    ];

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/card', (req, res) => {
    res.send(cards);
})

app.delete('/card/:cardId', (req, res) => {
    const cardId = req.params.cardId;
    cards = cards.filter(el => el.id !== cardId);
    res.send(cards);
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
