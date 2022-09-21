var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/votos", function (req, res) {
    medidaController.buscarVotos(req, res);
});


module.exports = router;