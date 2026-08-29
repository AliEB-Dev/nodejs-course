const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

const adminData = require('./admin')
router.get('/',(req,res)=>{
    const product = adminData.products
    res.render('shop',{
        prods:product,
        pageTitle:'Shop Page',
        path:'/',
    })
})

module.exports = router;