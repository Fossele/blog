const asyncHandler = require('express-async-handler'); const Product =
    require('../models/productModel');
const mongoose = require('mongoose');


// @desc Create a new product
// @route POST /api/products
// @access Public
const createProduct = asyncHandler(async (req, res) => {
    const { name, price, category, tags } = req.body;
    if (!name || !price || !category) {
        res.status(400);
        throw new Error('Name, price, and category are required.');
    }
    const product = await Product.create({ name, price, category, tags });
    res.status(201).json({
        success: true,
        data: product,
        message: 'Product created successfully',
    });
});
// @desc Get all products
// @route GET /api/products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        data: products,
        message: 'Fetched all products successfully',
    });
});
module.exports = {
    createProduct,
    getAllProducts,
};
// @desc Update product (PUT or PATCH)
// @route PUT /api/products/:id
// @route PATCH /api/products/:id// @access Public
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('Invalid product ID');
    }
    const product = await Product.findById(id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    const updated = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        success: true,
        data: updated,
        message: 'Product updated successfully',
    });
});
// @desc Delete product
// @route DELETE /api/products/:id
// @access Public
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400);
        throw new Error('Invalid product ID');
    }
    const product = await Product.findById(id);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    await Product.findByIdAndDelete(id);
    res.status(204).json();
});

module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct, };