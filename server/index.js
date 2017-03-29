const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
let connectionString = "postgres://ryanbryce@localhost/bearbones";
let massiveInstance = massive.connectSync({connectionString})


let app = module.exports = express();
app.use(express.static('../app'));
app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: true
 }));

app.use(cors());

app.set('db', massiveInstance);
let db = app.get('db');



let ctrl = require('./controllers/productsCtrl');
let cartCtrl = require('./controllers/cartCtrl')


//products

app.get('/api/products', ctrl.getProducts)

app.post('/api/product', ctrl.createProduct)

// cart section

function cart(req, res, next){
	if(!req.session.cart){
		req.session.cart = [];
		next()
	}
	next()
}

app.post('/api/cart/', cart, cartCtrl.addProduct);

app.get('/api/cart/', cart, cartCtrl.getCart);

app.put('/api/cart/remove', cart, cartCtrl.removeProd);

app.put('/api/cart/', cart, cartCtrl.updateItem);

let port = 3000
app.listen(port, () => {
  console.log(`sup from port ${port}`);
})
