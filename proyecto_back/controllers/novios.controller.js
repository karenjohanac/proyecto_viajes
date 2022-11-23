//controlador de la tabla novios
const Novio = require("../models/novios.model");

let response ={
    msg: "",
    exito:false
}

//si hay conexion
exports.create = function(req,res){
    let novio = new Novio({
        id_novio : req.body.id_novio,
        nombre: req.body.nombre,
        estatura: req.body.estatura,
        complexion: req.body.complexion,
        edad: req.body.edad,
        contacto: req.body.contacto,
        etnia: req.body.etnia,
        nacionalidad: req.body.nacionalidad
    })

    novio.save(function(err) {
        if(err){
            console.error(err),
            response.exito = false,
            response.msg  = "Error al guardar el novio"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El novio se guardo correctamente"
        res.json(response)
    })
}

//funcion para leer TODOS los novios
exports.find = function(req,res){
    Novio.find(function(err,novios){
        res.json(novios)
    })
}

//funcion para leer un novio por id
exports.findOne = function(req,res){
    Novio.findOne({_id: req.params.id},function(err,novio){
        res.json(novio);
    })
}

//funcion para actualizar un novio
exports.update = function(req,res){
    let novio = {
        id_novio : req.body.id_novio,
        nombre: req.body.nombre,
        estatura: req.body.estatura,
        complexion: req.body.complexion,
        edad: req.body.edad,
        contacto: req.body.contacto,
        etnia: req.body.etnia,
        nacionalidad: req.body.nacionalidad
    }
    Novio.findByIdAndUpdate(req.params.id, {$set:novio}, function(err){
        if(err){
            console.err(err),
            response.exito = false,
            response.msg = "Error al modificar el novio"
            res.json(response)
            return;
        }
            response.exito = true,
            response.msg = "El novio se modifico correctamente"
            res.json(response)
    })
}

//funcion para eliminar un novio
exports.remove = function(req, res){
    Novio.findByIdAndRemove({_id:req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el novio"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El novio ha sido eliminado correctamente"
        res.json(response)
    })
}
