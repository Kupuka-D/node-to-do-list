const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completada o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'Comando para crear una tarea', { descripcion })
    .command('actualizar', 'Comando para actualizar una tarea', { descripcion, completado })
    .command('borrar', 'Comando que sirve para eliminar una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}