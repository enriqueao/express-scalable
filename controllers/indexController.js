// Controller for all root / routes
const indexController = module.exports;

indexController.getIndexData = (req, res) => {
    return res.render('index', {
        title: 'API'
    });
}