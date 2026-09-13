const fs = require('fs');
const path = require('path');
const Product = require('./product');
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
)
module.exports = class Cart {
    static addProduct (id , productPrice){
        fs.readFile(p,(err,fileContent)=>{
            let cart = {products : [], totalprice:0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(prod=> prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedproduct;
            if (existingProduct) {
                updatedproduct = {...existingProduct};
                updatedproduct.qty = updatedproduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedproduct;
            }else{
                updatedproduct = {id : id , qty : 1}
                cart.products = [...cart.products , updatedproduct]; 
            }
            cart.totalprice = cart.totalprice + productPrice; 
            fs.writeFile(p,JSON.stringify(cart),err => {
                console.log(err);
            });
        });
    }
}