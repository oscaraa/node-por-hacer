const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    loadDB();
    
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    
    fs.writeFile('./db/data.json',data, (err) => {
        if (err) throw new Error("no se pudo guardar");
    });
}

const loadDB = () => {    
    
    try {
        listadoPorHacer = require('../db/data.json');
    }catch(err){
        listadoPorHacer = [];
    }
    
}

const getListado = () => {
    loadDB();
    return listadoPorHacer;
}

const actualizar = (descripcion,completado = true) => {
    loadDB();
    let index = listadoPorHacer.findIndex(tarea => 
         tarea.descripcion === descripcion);
    
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}


const borrar = (descripcion) => {
    loadDB();
     let result = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if(listadoPorHacer.length == result.length){
        return false;
    }else{
        listadoPorHacer = result;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}