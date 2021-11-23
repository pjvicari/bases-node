const argv = require('./config/yargs');
const colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar');

// const [,,arg = 5] = process.argv;
// const [,,base = 5] = arg.split('=')
console.clear();
crearArchivo(argv.base, argv.listar, argv.limite)
.then(nombreArchivo => console.log(colors.yellow(nombreArchivo), colors.magenta('creado')))
.catch(err => console.log(err));
