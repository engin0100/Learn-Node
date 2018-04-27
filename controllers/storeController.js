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

exports.editStore = async (req, res) => {
  //1. Finde the store given ID
  const store = await Store.findOne({ _id: req.params.id })
  //2. confrim they are the owner of the store
  //TODO
  //3. render out the edit form so the user can update their store
  res.render('editStore', { title: `Edit ${store.name}`, store });
};

exports.updateStore = async (req, res) => {
  //find and update the store
  const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, //return the new store instead of the old one
    runValidators: true
  }).exec();
  req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/stores${store.slug}">View Store -</a>`);
  res.redirect(`/stores/${store._id}/edit`);
  // redirect them the store and tell them if worked
}