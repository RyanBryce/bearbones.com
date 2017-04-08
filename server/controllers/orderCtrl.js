let db = require('../index').get('db');

module.exports = {

  createOrder: (req, res, next) => {
    console.log(req.body);
    let newO = req.body.user;
    console.log('this is newO', newO);
    db.create_order([newO.firstName, newO.lastName, newO.address, newO.address2, newO.city, newO.state, newO.zip, newO.email], (err, result) => {
      console.log('this is err', err)
      if (err) {
          res.status(420).send(err)
      } else {
        console.log("this is order products result " + result[0].orderid);
          res.send(result)
      }
    })
  }
}
