const mongoose = require('mongoose');

// Definir el esquema de colores
// const colorsSchema = new mongoose.Schema({
//     red: String,
//     blue: String
// });

// Definir el esquema de productos
const productSchema = new mongoose.Schema({
    id: String,
    sku: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 6
    },
    name: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 3,
        maxLength: 130,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 1000000000
    },
    image: String,
    details: {
        typeProduct: String,
        material: String,
        weight: {
            type: Number,
            min: 0.1
        },
        color: {
            enum : ["red" , "blue"]
        } //colorsSchema
    },
    stock: {
        type: Number,
        default: 0,
        required: true,
        min: 0
    }
}, {
    timestamps: true
});

// Definir el esquema de categorías
const categoriesSchema = new mongoose.Schema({
    categorie: String,
    items: [productSchema]
});

// Crear modelos a partir de los esquemas
const Product = mongoose.model("Product", productSchema);

const Category = mongoose.model("Category", categoriesSchema);

// Exportar los modelos
module.exports = { Product, Category };
