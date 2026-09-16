const fs = require('fs');
const path = require('path');
const p = path.join(
        path.dirname(process.mainModule.filename),
        'data',
        'products.json'
    );

const getProductFormFile = cb => {
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product{
    constructor(id,title,imageUrl,description,price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    save(){
        getProductFormFile(products => {
            if(this.id){
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);
                const updatedProducts = [...products];
                updatedProducts[existingProductIndex] = this;
                fs.writeFile(p,JSON.stringify(updatedProducts) , (err) => {
                    console.log("error",err);
                });
            }else {
                this.id = Math.random().toString();
                products.push(this);
                fs.writeFile(p,JSON.stringify(products) , (err) => {
                    console.log(err);
                });
            }
        });
    }
    static deleteById(id) {
        getProductFormFile(products =>{
            const updatedProducts = products.filter(prod=> prod.id !== id);
            fs.writeFile(p,JSON.stringify(updatedProducts), err => {
                if(!err){
                    console.log(err);
                }
            });
        });
    }
    static fetchAll(cb){
        getProductFormFile(cb);
    }
    static findById(id,cb){
        getProductFormFile(products =>{
            const product = products.find(p=> p.id == id)
            cb(product)
        });
    }
};