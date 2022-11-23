//aca va el modelo de la tabla empleados de la base de datos
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoviosSchema = Schema({
    id_novio: {type:String, required:true,max:60},
    nombre: {type:String, required:true,max:60},
    estatura:{type:Number,required:true,max:300},
    complexion:{type:String,required:true,max:40},
    edad:{type:Number,required:true,max:100},
    contacto:{type:String,required:true,max:70},
    etnia:{type:String,required:true,max:150},
    nacionalidad:{type:String,required:true,max:150},
});

module.exports = mongoose.model("novios",NoviosSchema);
