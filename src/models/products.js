const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number, required: false, default: 0.0 },
    rating: { type: Number, required: true },
    stock: { type: Number, required: false, default: 0 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: false },
    images: { type: [String], required: false },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;