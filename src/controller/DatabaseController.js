class DatabaseController {
    constructor(couchdb) {
        this.couchdb = couchdb;
    }

    listAction(req, res) {
        this.
            couchdb
            .listDatabases()
            .then(dbs => {
                res.send(dbs);
            }, err => {
                console.error(err);
                res.status(500).send(err);
            });
    }

    createAction(req, res) {
        const dbName = req.params.dbName;

        this
            .couchdb
            .createDatabase(dbName)
            .then(() => {
                res.status(201).send(`Database ${dbName} created`);
            }, err => {
                console.error(err);
                res.status(500).send(err);
            });
    }
}

module.exports = (couchdb) => {
    return new DatabaseController(couchdb);
};
