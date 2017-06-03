class FrontController {
    indexAction(req, res) {
        res.send('Hello World\n');
    }
}

module.exports = () => {
    return new FrontController();
};
