//Logica de la lista de tareas


const fs = require('fs');

let listToDO;

const guardarDB = () => {

    let data = JSON.stringify(listToDO);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('La tarea ha sido guardada');
    });

}

const cargarDB = () => {

    try {
        listToDO = require('../db/data.json');
    } catch (err) {
        listToDO = [];
    }
    return listToDO;
}

const getListado = () => {

    cargarDB();
    return listToDO;

}

function encontrarIndex(descripcion) {
    cargarDB();
    let index = listToDO.findIndex(tarea => tarea.descripcion === descripcion);
    return index;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listToDO.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listToDO[index].completado = completado;
        guardarDB();
        return 'Se actualizo correctamente';
    } else {
        return 'No se pudo actualizar';
    }
}

const borrar = (descripcion) => {

    let index = encontrarIndex(descripcion);
    if (index >= 0) {
        listToDO.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const crear = (descripcion) => {


    cargarDB();

    let to_do = {
        descripcion,
        completado: false
    };


    listToDO.push(to_do);

    guardarDB();

    return to_do;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}