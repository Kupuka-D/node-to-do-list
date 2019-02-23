//Este es el main, sería la vista


const color = require('colors');
const argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, borrar } = require('./to-do/to-do');




let comando = argv._[0];


switch (comando) {

    case 'crear':
        let tarea = crear(argv.descripcion);

        break;

    case 'listar':
        let listado = getListado();

        for (let tarea of listado) {
            console.log('======To do List ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================'.green);
        }
        break;
    case 'actualizar':
        let result = actualizar(argv.descripcion, argv.completado);
        console.log(result);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('No se reconoce el comando ingresado');


}