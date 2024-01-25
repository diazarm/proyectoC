const express = require('express');
const { traemeLasbebidas,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
    reduceStock,
    getCategories } = require('../controllers/productController');

const productRouter = express.Router();


productRouter.route("/products")
    .get(traemeLasbebidas);

productRouter.route("/product")
    .post(createProduct); 

productRouter.route("/product/:id")
    .get(getProductById)
    .put(editProduct)
    .delete(deleteProduct);

productRouter.route("/reduceStock")
    .put(reduceStock);

productRouter.route("/categories")
    .get(getCategories);

module.exports = productRouter;
