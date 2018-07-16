const descripcion = {
    demand: true,
    alias: 'd'
}


const completado = {
    alias: 'c',
    demand: true
}

const argv = require('yargs')
    .command('crear','Crear un elemento',{
        descripcion
    })
    .command('actualizar','Actualiza el estado completado de una tarea',{
        descripcion,
        completado
    })
    .command('borrar','Borrar un elemento',{
        descripcion,
    })
    .help()
    .argv;


module.exports = {
    argv
}