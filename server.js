'use strict';

const express = require('express');
const PORT = 8000;
const app = express();
const nodeCouchDb = require('node-couchdb');
const couch = new nodeCouchDb({
    host: 'couchdb',
    auth: {
        user: 'root',
        pass: 'root'
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!\n');
});

app.get('/db/', (req, res) => {
    couch
        .listDatabases()
        .then(dbs => {
            res.send(dbs);
        }, err => {
            console.error(err);
            res.status(500).send(err);
        });
});

app.post('/db/:dbName', (req, res) => {
    const dbName = req.params.dbName;

    couch
        .createDatabase(dbName)
        .then(() => {
            res.status(201).send(`Database ${dbName} created`);
        }, err => {
            console.error(err);
            res.status(500).send(err);
        });
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);
