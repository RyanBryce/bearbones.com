let db = require('../index').get('db');

module.exports = {

	addProduct: function(req, res){
    // console.log(req.body);
		req.session.cart.push(req.body)
    // console.log('this post is cart', req.session.cart);
		res.send(req.session.cart)
	},

	getCart: function(req, res){
    // console.log('this is get cart', req.session.cart);
		res.send(req.session.cart)
	},

	updateItem: function(req, res){
		// console.log('in server updateCart', req.session.cart[0])
		for(var i = 0; i < req.session.cart.length; i++){
			if(req.session.cart[i].id === req.body.id){
				req.session.cart[i].quantity = req.body.quantity;
				break;
			}
		}
		res.send(req.session.cart)
	},

	removeProd: function(req, res){
		// console.log(req.body)
		for(var i = 0; i < req.session.cart.length; i++){
			if(req.session.cart[i].id === req.body.id){
				req.session.cart.splice(i, 1);
				break;
			}
		}
		res.send(req.session.cart)
	}

}
