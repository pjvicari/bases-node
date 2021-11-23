const argv = require('yargs')
.option('b',{
    alias:'base',
    type: 'number',
    demandOption: true
})
.option('l',{
    alias:'listar',
    type: 'boolean',
    default: false
})
.option('li',{
    alias:'limite',
    type: 'number',
    default: 10
})
.check((argv, options) => {
    if(isNaN(argv.base))
    {
        throw 'la base tiene que ser un número';
    }
    return true;
})
.argv;

module.exports = argv;