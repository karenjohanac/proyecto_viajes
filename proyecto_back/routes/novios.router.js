//ruta de la tabla empleados
const express = require("express");
const router = express.Router();
const noviosController = require("../controllers/novios.controller");

//el enrutamiento es a traves de express
//llama al metodo create y envia parametros por el metodo post
router.post("/", noviosController.create);
router.get("/", noviosController.find);
router.get("/:id",noviosController.findOne);
router.put("/:id",noviosController.update);
router.delete("/:id",noviosController.remove);

module.exports = router;