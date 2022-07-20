
//BLOG CRUD
//config express and body-parser
const express=require('express')
const app=express();


var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config dotenv and local port
require('dotenv').config()
const port=process.env.PORT||6300;

//config cors
app.use((req, res, next) => {
    //Configuramos el control de acceso para que cualquier cliente pueda hacer peticiones ajax
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    //permitimos métodos http 
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//aply the routes
const rutas=require('./routes/route')
app.use(rutas);

//server is listens with the local port 6300 and the localhost
app.listen(port,'0.0.0.0',()=>{
    console.log("nodejs server is running on "+port);
});

module.exports=app;