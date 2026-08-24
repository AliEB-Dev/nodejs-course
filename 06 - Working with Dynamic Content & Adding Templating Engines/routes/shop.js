const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

const adminData = require('./admin')
router.get('/',(req,res)=>{
    const product = adminData.products
    res.render('shop',{prods:product,docTitle:'Shop Page'})
})

module.exports = router;