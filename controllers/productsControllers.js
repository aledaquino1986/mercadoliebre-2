const fs = require("fs");
const path=require("path");
const productsFilePath=path.join(__dirname, "../data/productsDatabase.json");
const products= JSON.parse(fs.readFileSync(productsFilePath, "UTF-8"));



let productControllers = {

    showProduct: function(req, res, next) {
        let producto = products.find(function(element) {
            return element.id == req.params.id
        });
        
        let title = producto.name;
        res.render("productDetail", {
            title: title,
            producto: producto

        });
        
    }
    
}


module.exports = productControllers; 

