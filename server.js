'use strict';

const PORT = 8000;

const express = require('express')
const app = express();
const nodeCouchDb = require('node-couchdb');

app.set('views', __dirname + '/src/views');
app.set('view engine', 'pug');

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

app.use('/lib', express.static('node_modules'));
app.use(express.static('web'));

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT);
console.log(`Running on port ${PORT}`);
