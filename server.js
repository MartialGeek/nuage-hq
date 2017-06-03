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

const frontController = require('./src/controller/FrontController')();
const dbController = require('./src/controller/DatabaseController')(couchdb);

app.get('/', frontController.indexAction.bind(frontController));

app.get('/db/', dbController.listAction.bind(dbController));
app.post('/db/:dbName', dbController.createAction.bind(dbController));

app.listen(PORT);
console.log(`Running on port ${PORT}`);
