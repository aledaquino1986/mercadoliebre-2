var express = require('express');
var router = express.Router();
var indexControllers = require("../controllers/indexControllers");

/* GET home page. */
router.get('/', indexControllers.showMain);

module.exports = router;
