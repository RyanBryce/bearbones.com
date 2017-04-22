let db = require('../index').get('db');

module.exports = {

  createOrder: (req, res, next) => {
      // console.log(req.body);
      let newO = req.body.user;
      const uCart = req.body.userCart;

      // console.log('this is newO', newO);
      db.create_order([newO.firstName, newO.lastName, newO.address, newO.address2, newO.city, newO.state, newO.zip, newO.email], (err, result) => {
          // console.log('this is err', err)
          if (err) {
              res.status(420).send(err)
          } else {
              // console.log("this is order products result " + result[0].orderid);
              const oId = result[0].orderid;
              // console.log('this is user cart after res', uCart);
              uCart.forEach((prod) => {
                  // console.log("this is inside forEach ", prod.id, prod.quantity, oId);
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
    },

    updateOrder: (req, res, next) => {
      const id = req.params.id
      console.log(req.body.user);
      const user = req.body.user
      console.log(id);
      db.put_updateOrder_id([id, user.firstName, user.lastName, user.address, user.address2, user.city, user.state, user.zip, user.email ], (err, resp) => {
        if (err) {
            res.status(420).send(err)
        } else {
            console.log("this is order products result " + resp[0].orderid);
            const oId = resp[0].orderid;
            res.send(resp)
        }
      })
    },
    getOrder: (req, res, next) => {
      // console.log("this is req getoprder.id", req.params.id);
      db.get_order_id([req.params.id], (err, resp) => {
        if (err) {

          // console.log(`tthis is getorder err $(err)`);
          res.status(420).json(err)

        } else {

          // console.log("this is get order result ", resp);
          req.session.order = resp
          res.json(resp)

        }
      })
    }
}
