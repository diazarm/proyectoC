const express = require('express');
const { getProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct,
    reduceStock,
    getCategories } = require('../controllers/productController');

const productRouter = express.Router();


productRouter.route("/product")
    .get(getProducts);

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
