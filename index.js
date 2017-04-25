const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors');
// const config = require('./config');





// var pg = require('pg');
// pg.defaults.ssl = true;
// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   if (err) throw err;
//   console.log('Connected to postgres! Getting schemas...');
//
//   client
//     .query('SELECT table_schema,table_name FROM information_schema.tables;')
//     .on('row', function(row) {
//       console.log(JSON.stringify(row));
//     });
// });




const massive = require('massive');
let connectionString = 'postgres://bbqykefkgflnxc:049234baf7300b6a10a836903d40798d5f4dfa17b48b60e3d1c62a5ef396e7c9@ec2-23-21-111-81.compute-1.amazonaws.com:5432/d6s63k1ai5slel';
let massiveInstance = massive.connectSync({connectionString})
var stripe = require('stripe')(process.env.STRIPESECRETT);
console.log(process.env);

var app = module.exports = express();
app.use(express.static('./app'));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSIONSECRET,
  resave: false,
  saveUninitialized: true
 }));

app.use(cors());

app.set('db', massiveInstance);
var db = app.get('db');



let ctrl = require('./controllers/productsCtrl');
let cartCtrl = require('./controllers/cartCtrl');
let stripeCtrl = require('./controllers/stripeCtrl');
let orderCtrl = require('./controllers/orderCtrl');


//products

app.get('/api/products', ctrl.getProducts)

app.post('/api/product', ctrl.createProduct)

// cart section
//cart middleware
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

app.put('/api/cart/', cart, cartCtrl.updateProd);

//stripe section

app.post('/charge', stripeCtrl.charge );


//order section

app.post('/api/order', orderCtrl.createOrder);

app.get('/api/uorder/:id', orderCtrl.getOrder);

app.put('/api/update/order/:id', orderCtrl.updateOrder);

//port section

const port = 3000
app.listen(process.env.PORT || port, () => {
  console.log(`sup from port ${port}`);
})
