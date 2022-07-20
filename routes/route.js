
//routes
const express= require('express');
var controller = require('../controller/controllerdates');
const router=express.Router();

router.get('/all/',controller.mostrarDatos);
router.get('/filter/',controller.filtrarTitulo)

module.exports= router;
