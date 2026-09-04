const path = require('path');
const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/products');


router.get('/add-product',ProductController.getAddProduct)
router.use('/add-product',ProductController.postAddProducts)

exports.router = router;