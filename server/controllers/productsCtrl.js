let db = require('../index').get('db');

module.exports = {
  getProducts: (req, res) => {
    db.get_products([], (err, results) => {
        res.send(results)
    })
  },
  createProduct: (req, res) => {
    let newP = req.body;
    db.create_product([newP.name, newP.price, newP.description, newP.imgurl1, newP.imgurl2, newP.imgurl3, newP.imgurl4 ,newP.imgurl5], (err, result) => {
      if (err) {
          res.status(420).send(err)
      } else {
        console.log("this is creat products" + result);
          res.send(result)
      }
    })
  }
}
