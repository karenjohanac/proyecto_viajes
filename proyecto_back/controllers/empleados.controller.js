//controlador de la tabla empleados
const Empleado = require("../models/empleados.model");

let response ={
    msg: "",
    exito:false
}

//si hay conexion
exports.create = function(req,res){
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    empleado.save(function(err) {
        if(err){
            console.error(err),
            response.exito = false,
            response.msg  = "Error al guardar el empleado"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El empleado se guardo correctamente"
        res.json(response)
    })
}

//funcion para leer TODOS los empleados
exports.find = function(req,res){
    Empleado.find(function(err,empleados){
        res.json(empleados)
    })
}

//funcion para leer un empleado por id
exports.findOne = function(req,res){
    Empleado.findOne({_id: req.params.id},function(err,empleado){
        res.json(empleado);
    })
}

//funcion para actualizar un empleado
exports.update = function(req,res){
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }
    Empleado.findByIdAndUpdate(req.params.id, {$set:empleado}, function(err){
        if(err){
            console.err(err),
            response.exito = false,
            response.msg = "Error al modificar el empleado"
            res.json(response)
            return;
        }
            response.exito = true,
            response.msg = "El empleado se modifico correctamente"
            res.json(response)
    })
}

//funcion para eliminar un empleado
exports.remove = function(req, res){
    Empleado.findByIdAndRemove({_id:req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar empleado"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El empleado ha sido eliminado correctamente"
        res.json(response)
    })
}
