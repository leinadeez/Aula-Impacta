const restful = require('node-restful');

const FuncionarioSchema = new restful.mongoose.Schema({
    nome : {type : String, required : true},
    endereco : {type : String},
    cargo : {type : String},
    salario : {type: Number},
});

const model = restful.model('funcionarios', FuncionarioSchema);
exports.model = model