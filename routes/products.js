var express = require('express');
var router = express.Router();
var productControllers = require("../controllers/productsControllers");

/* GET home page. */
router.get("/detail/:id/:category", productControllers.showProduct)

module.exports = router;
