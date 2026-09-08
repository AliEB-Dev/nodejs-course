const path = require('path');
const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin');


router.get('/add-product',AdminController.getAddProduct);
router.get('/products',AdminController.getProducts);
router.post('/add-product',AdminController.postAddProducts)

exports.router = router;