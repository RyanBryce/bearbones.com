let db = require('../index').get('db');
const config = require('../config');
var stripe = require('stripe')('config.stripeSecretT');

module.exports = {



  charge: (req, res, next) => {
    console.log('this is req.body',req.body);
    console.log('this is req.body',req.session);

  }
}
