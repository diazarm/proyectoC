const {Product} = require("../models/Product")
const {Category} = require("../models/Product")



// traer la categoría de productos con GETCategory
const getCategories = async (req, res) => {
    try {
        const Categories = await Categories.find();
        res.json({ 
            success: true, 
            msg: "Lista de Categorías", 
            Categories: Categories
        })
    } catch (error) {
        res.json({ 
            success: false, 
            msg: error.message 
        })
    }
}

//relacionado con GET
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json({ 
            success: true, 
            msg: "Lista de productos", 
            info: products 
        })
    } catch (error) {
        res.json({ 
            success: false, 
            msg: error.message 
        })
    }
}



//relacionado con GET
const getProductById = async (req, res) => {
    try {
        const { id } = req.param
        const product = await Product.findById(id);

        res.json({ 
            success: true, 
            msg: "Se ha cargado el producto", 
            product 
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            msg: error.message 
        })
    }
}


//relacionado con POST

const createProduct = async (req, res) => {
       const {sku, name, price, image, stock} = req.body;
    try {
        const  newProduct =  await conntrollerProduct(sku,name,price,image,stock);   
        res.json({
            sucess: true,
            msg: "Se ha creado el producto!",
            info: newProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            msg: error.message
        })
    }
}

//? Aqui el controller 
const conntrollerProduct = async(sku,name,price,image,stock) =>{
        const newProduct = new Product({sku,name,price,image,stock});
            await newProduct.save();
    }









//relacionado con PUT

const editProduct = async (req, res) => {

    const { id } = req.params;
    const { name, price, stock, details, image } = req.body;

    try {

        const updateProduct = await Product.findByIdAndUpdate(id, { name, price, stock, details, image }, { new: true })
        res.status(201).json({
            success: true,
            msg: "producto actualizado con éxito!",
            updateProduct
        })

    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        })
    }
}

//relacionado con Eliminar producto -> DELETE

const deleteProduct = async (req, res) => {

    const { id } = req.params;
    try {
        const destroyProduct = await Product.findByIdAndDelete(id);

        res.json({
            success: true,
            msg: "producto eliminado con éxito!",
            destroyProduct
        })
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        })
    }
}

//relacionado con PUT

const reduceStock = async (req, res) => {
    const productPurchased = req.body.cartItems;
    try {
        productPurchased.map(async (product) => {
            await Product.findByIdAndUpdate(product._id, { stock: product.stock - product.quantity })
        })
        res.status(201).json({
            success: true,
            msg: "Se ha reducido el stock de los productos"
        })

    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports = { getCategories, getProducts, getProductById, createProduct, editProduct, deleteProduct, reduceStock }