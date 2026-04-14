const Product = require("../model/Product");

const getAllProduct = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({data: products});
};

module.exports = {getAllProduct,}