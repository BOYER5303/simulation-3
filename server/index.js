require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const controller = require('./controller')

const {SESSION_SECRET, CONNECTION_STRING} = process.env
const PORT = 4001;
const app = express();


massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected')
});

app.use(express.json());

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET
    })
);
app.get('/api/house/all', controller.getAllHouses)
//app.delete('/api/house/:id', controller.deleteHouse)
app.post('/api/house/', controller.addNewHouse)

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))