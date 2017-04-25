let db = require('../index').get('db');

module.exports = {
	//updates the empty array declared by middleware with product coming from frontend
	//ends the cart to frontend
	addProduct: function(req, res){
		req.session.cart.push(req.body)
		res.send(req.session.cart)
	},
	//sends cart to front end
	getCart: function(req, res){
		res.send(req.session.cart)
	},
	//searches the cart for teh first occurence of prod obj
	//finds matching ids then updates the prod quantity
	//stops the loop and sends back the cart
	updateProd: function(req, res){
		for(var i = 0; i < req.session.cart.length; i++){
			if(req.session.cart[i].id === req.body.id){
				req.session.cart[i].quantity = req.body.quantity;
				break;
			}
		}
		res.send(req.session.cart)
	},
	//searches the cart for teh first occurence of prod obj
	//finds matching ids then deletes the prod from cart
	//stops the loop and sends back the cart
	removeProd: function(req, res){
		for(var i = 0; i < req.session.cart.length; i++){
			if(req.session.cart[i].id === req.body.id){
				req.session.cart.splice(i, 1);
				break;
			}
		}
		res.send(req.session.cart)
	}

}
