const fs = require("fs");
const path=require("path");
const productsFilePath=path.join(__dirname, "../data/productsDatabase.json");
const products= JSON.parse(fs.readFileSync(productsFilePath, "UTF-8"));

//const ​toThousand ​= n=>n.​toString()​.​replace(​/\B(?=(\d{3})+(?!\d))/g,"."​)​;

let indexControllers = {
    showMain: function(req, res, next) {
        let ofertas = products.filter(function(element) {
            return element.category =="in-sale"
        })
        let visitados = products.filter(function(element) {
            return element.category =="visited"
        })
        res.render('index', {
            title: "Mercado Liebre Argentina",
            //toThousand: toThousand,
            visitados: visitados,
            ofertas: ofertas
            
    });
  
   }
}


module.exports = indexControllers;