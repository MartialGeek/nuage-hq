class FrontController {
    indexAction(req, res) {
        res.render('front/index');
    }
}

module.exports = () => {
    return new FrontController();
};
