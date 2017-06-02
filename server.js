'use strict';

const PORT = 8000;

const app = require('express')();
const nodeCouchDb = require('node-couchdb');

const couchdb = new nodeCouchDb({
    host: 'couchdb',
    auth: {
        user: 'root',
        pass: 'root'
    }
});

const FrontController = require('./src/controller/FrontController');
const DatabaseController = require('./src/controller/DatabaseController');

app.get('/', new FrontController().indexAction);

const dbController = new DatabaseController(couchdb);
app.get('/db/', dbController.listAction);
app.post('/db/:dbName', dbController.createAction);

app.listen(PORT);
console.log(`Running on port ${PORT}`);
