/* exports.myMiddleware = (req, res, next) => {
    req.name = 'Engin';
    // res.cookie('name', 'engin is cool', {maxAge: 90000}); COOKIE CHECKINGS
    if(req.name === 'Engin') {
        throw Error('that is a stupid name');
    }
    next();
}; */

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');    
};

// this is the controller

exports.addStore = (req, res) => {
    res.render('editStore', { title: 'Add Store'});
};

exports.createStore = (req, res) => {
    res.json(req.body);
};