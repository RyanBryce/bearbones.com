let db = require('../index').get('db');

module.exports = {
  // getProducts: (req, res) => {
  //   db.read_products([], (err, results) => {
  //     console.log(results);
  //       res.send(results)
  //   })
  // },
  // createProduct: (req, res) => {
  //   let newP = req.body;
  //   console.log(newP.name);
  //   db.create_product([newP.name, newP.description, newP.price, newP.imageurl], (err, result) => {
  //     if (err) {
  //         res.status(420).send(err)
  //     } else {
  //         res.send(result)
  //     }
  //   })
  // }
}
