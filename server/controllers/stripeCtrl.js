let db = require('../index').get('db');
const config = require('../config');
const stripe = require('stripe')(config.stripeSecretT);

module.exports = {

  charge: (req, res, next) => {
    console.log('this is req.body stripe stuf n things', req.body.token.email);
    console.log('this is req.body session cart n things', req.session);
    var token = req.body.token.id
    var email = req.body.token.email
    var cart = req.session.order
    var total = 0;
  	for(var i = 0; i < cart.length; i++){
  		cart[i].total = cart[i].quantity * cart[i].price;
  		total += cart[i].total;
  	}
    console.log(total);
    var charge = stripe.charges.create({
      amount: total * 100,
      currency: "usd",
      description: "Example charge",
      source: token,
      receipt_email: email
    }, function(err, charge) {
      if(err){
        res.json(err)
        console.log(err);
      } else {
        req.session.order = []
        req.session.cart = [];
        console.log("cool beans");
        const cool = "cool beans"
        res.json(cool)
      }
      // asynchronously called
    });
  }
}
