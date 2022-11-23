//ruta de la tabla empleados
const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/empleados.controller");

//el enrutamiento es a traves de express
//llama al metodo create y envia parametros por el metodo post
router.post("/", empleadosController.create);
router.get("/", empleadosController.find);
router.get("/:id",empleadosController.findOne);
router.put("/:id",empleadosController.update);
router.delete("/:id",empleadosController.remove);

module.exports = router;