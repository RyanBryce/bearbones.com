let db = require('../index').get('db');

module.exports = {

    createOrder: (req, res, next) => {
        console.log(req.body);
        let newO = req.body.user;
        const uCart = req.body.userCart;

        console.log('this is newO', newO);
        db.create_order([newO.firstName, newO.lastName, newO.address, newO.address2, newO.city, newO.state, newO.zip, newO.email], (err, result) => {
            console.log('this is err', err)
            if (err) {
                res.status(420).send(err)
            } else {
                console.log("this is order products result " + result[0].orderid);
                const oId = result[0].orderid;
                console.log('this is user cart after res', uCart);
                uCart.forEach((prod) => {
                    console.log("this is inside forEach ", prod.id, prod.quantity, oId);
                    db.create_order_rel([oId, prod.id, prod.quantity ], (err, result) => {
                        // if (err) {
                        //     res.status(420).send(err)
                        // } else {
                        //     res.send(result)
                        // }
                    })
                })
                res.send(result)
            }
        })
    }
}
