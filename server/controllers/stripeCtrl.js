let db = require('../index').get('db');
const config = require('../config');
const stripe = require('stripe')(config.stripeSecretT);

module.exports = {

  charge: (req, res, next) => {
    console.log('this is req.body stripe stuf n things',req.body.token.id);
    console.log('this is req.body session cart n things',req.session.order);
    var token = req.body.token.id
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
      source: token
    }, function(err, charge) {
      if(err){
        console.log(err);
      } else {
        console.log("cool beans");
      }
      // asynchronously called
    });
  }
}
