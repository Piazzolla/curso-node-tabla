const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .check((argv, options) => {
                if( isNaN(argv.b)){
                    throw 'la base tiene que ser un numero';
                }
                return true;
            })
            .option('l', {
                alias: 'lista',
                type: 'boolean',
                default: false,
                describe: 'Lista la tabla por consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                default: 10,
                describe: 'Hasta que numero hacer la tabla'
            })
            .argv;

module.exports = argv;