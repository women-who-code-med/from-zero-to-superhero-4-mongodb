const express = require("express");
const controller = require("../controllers/products.controller");

const router = express.Router();

router.route('/products')
    .get(controller.getAllProducts)
    .post(controller.createProduct);

router.route('/products/:id')
    .get(controller.getProductById)
    .put(controller.updateProduct)
    .patch(controller.updateProduct)
    .delete(controller.deleteProduct);

module.exports = router;