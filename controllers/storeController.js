exports.myMiddleware = (req, res, next) => {
    req.name = 'Engin';
    // res.cookie('name', 'engin is cool', {maxAge: 90000}); COOKIE CHECKINGS
    if(req.name === 'Engin') {
        throw Error('that is a stupid name');
    }
    next();
};


exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');    
};

// this is the controller