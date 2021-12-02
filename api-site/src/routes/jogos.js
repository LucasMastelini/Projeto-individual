var express = require("express");
var router = express.Router();

var jogosController = require("../controllers/jogosController")

router.post("/votar/:idusuario/", function (req, res) {
    jogosController.votar(req, res)
});



module.exports = router;