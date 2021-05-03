const cardCreate = require("./card/cardCreate");
const cardDelete = require("./card/cardDelete");
const cardGetAll = require("./card/cardGetAll");
const cardUpdateById = require("./card/cardUpdateById");

function routes(app) {

    app.get('/', (req, res) => {
        res.send('Hello World!');
    })

    app.get('/card', cardGetAll);
    app.delete('/card/:cardId', cardDelete);
    app.post('/card', cardCreate);
    app.patch('/card/:cardId', cardUpdateById);

}

module.exports = routes;
