//controller

//json database
const db=require('../database/db.json')

var controller={
    mostrarDatos:(req,res)=>{
        let result=db;
        res.json(result);
        console.log(result)
    },
    filtrarTitulo:(req,res)=>{
        let array=[];
        let params=req.body;
        let titulo=params.title;
        console.log("titulo: "+titulo);
        let result=db.publicaciones;
        for(data of result){
        if(data.title===titulo){
            array.push(data.nick);
            array.push(data.title)
            array.push(data.description)
            res.json(array)
            
        }
    }
    }
};
module.exports= controller;