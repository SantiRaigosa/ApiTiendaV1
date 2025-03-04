const exp = require('express');
require(dotenv)
//Traer el modelo
const modeloProducto = require('./src/models/productos.models')

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());
const app = exp();

const enrutador = require('src/routes/router')

app.get('/productos', )

app.get('/productos/:ref', async (request,response)=>{
    let ListaProductos = await modeloProducto.find(("referncia":request.params.ref));
    if(ListaProductos){
        response.status(200),json(ListaProductos)
    }else{
        response.status(500),json((eror))
    }
});

app.listen(process.env.PORT, ()=>{
    console.log('Aplicacion corriendo en el puerto '+process.env.PORT)
});

