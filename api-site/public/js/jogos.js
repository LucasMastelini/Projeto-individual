var express = require("express");
var router = express.Router();

var  jogosController = require("../controllers/jogosController")

router.post("/votar", function (req, res) {
    jogosController.votar(req, res)
});

router.get("/listar", function (req, res) {
    jogosController.listar(req, res)
});

module.exports = router;