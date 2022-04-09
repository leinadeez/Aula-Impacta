const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const conectado = module.exports = mongoose.connect('mongodb://localhost:27017/teste-cliente', 
    { useMongoClient: true },
    error => {
        if(error) {
            return console.log('deu ruim no banco: ', error)
        }
        console.log("Deu bom no banco")
    });

module.export = conectado