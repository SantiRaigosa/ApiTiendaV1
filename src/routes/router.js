const express = require('express');
const router = express.Router();
const modeloProducto = require('../models/productos.model')

router.get('/productos', async (request,response)=>{
    let ListaProductos = await modeloProducto.find();
    if(ListaProductos){
        response.status(200),json(ListaProductos)
    }else{
        response.status(500),json((eror))
    }
})

module.exports = router