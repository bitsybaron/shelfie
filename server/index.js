const express = require('express');
const ctrl = require('./controller')
const app = express();
const massive = require('massive');
require("dotenv").config()

const {CONNECTION_STRING, SERVER_PORT} = process.env;

app.use(express.json());
massive({
    connectionString:  CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db)
    console.log('db is connected')
}).catch(err => console.log(err))

app.get('/api/inventory', ctrl.getInventory);
app.post('/api/product', ctrl.addProduct);

app.listen(SERVER_PORT, () => {
    console.log('Server is running on port ' + SERVER_PORT)
})