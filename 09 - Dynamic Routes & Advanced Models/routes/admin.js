const path = require('path');
const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin');


router.get('/add-product',AdminController.getAddProduct);
router.get('/products',AdminController.getProducts);
router.post('/add-product',AdminController.postAddProducts);
router.get('/edit-product/:productId',AdminController.getEditProduct);
router.post('/edit-product',AdminController.postEditProducts);
router.post('/delete-product',AdminController.postDeleteProduct);
exports.router = router;