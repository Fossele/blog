const Product = require("../model/Product");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            data: products,
            message: "Product fetch successfully!",
        });
    } catch (error) {
        res.status(500).json({
            success: "false",
            message: "Server error"
        })
    }
};

const createProduct= async(req, res) =>{
    try {
        const {name, price} = req.body;
        if(!name || !price){
            return res.status(400).json({
            success: false,
            message: "name and price are required!",
        });
        }

        const newProduct = await Product.create({name, price});
        res.status(201).json({
            success: true,
            data: newProduct,
            message: "Product successfully created!",});

    } catch (error) {
        res.status(500).json({
            success: "false",
            message: "Server error"
        })
    }
}

module.exports = { getAllProducts, createProduct}