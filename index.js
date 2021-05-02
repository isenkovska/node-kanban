const express = require('express')
const routes = require("./routes");
const bodyParser = require("./bodyParser");
const dbConnection = require("./dbConnection");

const app = express();
const PORT = process.env.PORT || 5000;

dbConnection();
bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


// 8zcRzhmttTyHLUz

//mongodb+srv://admin:8zcRzhmttTyHLUz@cluster0.5l5up.mongodb.net/kanban?retryWrites=true&w=majority
