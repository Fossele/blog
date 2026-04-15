const express = require('express');
const router = express.Router();
const {createProduct,getAllProducts,updateProduct,deleteProduct,} = require('../controllers/productController');
router.route('/').post(createProduct).get(getAllProducts);
router.route('/:id').put(updateProduct).patch(updateProduct).delete(deleteProduct);