const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
// const sass = require('sass');
// sass.render()
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

let ctrl = require('./controllers/productsCtrl')




// app.get('/', (req, res) => {
//   console.log('hi');
//   res.send('hi fucker')
// })
// app.get('/api/products', ctrl.getProducts)
//
// app.post('/api/product', ctrl.createProduct)

let port = 3000
app.listen(port, () => {
  console.log(`sup from port ${port}`);
})
