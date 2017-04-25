let db = require('../index').get('db');

module.exports = {
  //this creates an order into the database
  createOrder: (req, res, next) => {
      let newO = req.body.user;
      const uCart = req.body.userCart;
      db.create_order([newO.firstName, newO.lastName, newO.address, newO.address2, newO.city, newO.state, newO.zip, newO.email], (err, result) => {
          if (err) {
            res.send(err)
          } else {
            //results are sent back and i grab the order id
            //and then i set the foreign keys in my db
              const oId = result[0].orderid;
              uCart.forEach((prod) => {
                  db.create_order_rel([oId, prod.id, prod.quantity ], (err, result) => {
                  })
              })
            res.send(result) //sending order obj to front end to be used
          }
      })
    },

    updateOrder: (req, res, next) => {
      const id = req.params.id
      const user = req.body.user
      //use the order id i get from front end to update the order with that id in my backend
      //then i send the uptaded order obj to the frontend to be displayed by the payment page
      db.put_updateOrder_id([id, user.firstName, user.lastName, user.address, user.address2, user.city, user.state, user.zip, user.email ], (err, resp) => {
        if (err) {
            res.status(420).send(err)
        } else {
            const oId = resp[0].orderid;
            res.send(resp)
        }
      })
    },
    getOrder: (req, res, next) => {
      //get order from db by id
      db.get_order_id([req.params.id], (err, resp) => {
        if (err) {
          res.status(420).json(err)
        } else {
          req.session.order = resp
          res.json(resp)
        }
      })
    }
}
