const Product = require('../models/product');
exports.getProducts = (req,res)=>{
    Product.fetchAll((products)=> {
        res.render('shop/product-list',{
            prods:products,
            pageTitle:'',
            path:'/products',
        });
    });
};
exports.getIndex = (req,res,next)=>{
    Product.fetchAll((products)=> {
        res.render('shop/index',{
            prods:products,
            pageTitle:'Shop Page',
            path:'/',
        });
    });
};
exports.getCart = (req,res,next)=>{
    res.render('shop/cart',{
        path:'/cart',
        pageTitle:'Your Cart',
    });
};

exports.getCheckout = ()=>{
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle: 'CheckOut'
    });
};
exports.getOrders = (req,res,next)=>{
    res.render('shop/orders',{
        path:'/orders',
        pageTitle:'Your Orders',
    });
};