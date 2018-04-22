/* exports.myMiddleware = (req, res, next) => {
    req.name = 'Engin';
    // res.cookie('name', 'engin is cool', {maxAge: 90000}); COOKIE CHECKINGS
    if(req.name === 'Engin') {
        throw Error('that is a stupid name');
    }
    next();
}; */
const mongoose = require("mongoose");
const Store = mongoose.model("Store");

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render("index");
};

// this is the controller

exports.addStore = (req, res) => {
  res.render("editStore", { title: "Add Store" });
};

exports.createStore = async (req, res) => {
  // res.json(req.body);
  const store = await (new Store(req.body)).save();
  await store.save();
  //without async await!
  // .then(store => {
  //     res.json(store);
  // })
  // .catch(err => {
  //     throw Error(err);
  // })
  req.flash(
    "success",
    `Successfully Created ${store.name}. Care to leave a review`
  );
  res.redirect(`/store/${store.slug}`);
};


exports.getStores = async (req, res) => {
    // 1 query the database for a list of all stores
    const stores = await Store.find();
    res.render('stores', { title: 'Stores', stores });
}