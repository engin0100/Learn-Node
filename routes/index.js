const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');
// Do work here
router.get('/' , catchErrors(storeController.getStores)); // Controller inbound
router.get('/stores' , catchErrors(storeController.getStores));
router.get('/add' , storeController.addStore); // Controller inbound
router.post('/add', catchErrors(storeController.createStore));
router.post('/add/:id', catchErrors(storeController.updateStore));
/* router.get('/' , storeController.myMiddleware, storeController.homePage); // Controller inbound */
router.get('/stores/:id/edit', catchErrors(storeController.editStore));










//(req, res) => {
  //const wes ={name:'wes', age: 100, cool: true};
  /* res.send('Hey! It works!'); */
  /* res.json(wes); */
  /* res.send(req.query.name); */
  /* res.json(req.query); */
  //res.render('hello', {
    //name: 'wes', 
    // dog: 'snickers'
    //dog: req.query.dog,
    //title: 'I love food'
  //});
//});

//router.get('/reverse/:name', (req, res) => {
  /* res.send('it works!'); */
 // const reverse = [...req.params.name].reverse().join('');
  //res.send(reverse);
//});

module.exports = router;
