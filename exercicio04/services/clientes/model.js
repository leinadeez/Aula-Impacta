const restful = require('node-restful');

const AtividadesSchema = new restful.mongoose.Schema({
    descricao : {type : String, required: true},
    duracao : {type : Number, required: true}
});

const ClienteSchema = new restful.mongoose.Schema({
    nome : {type : String, required : true},
    endereco : {type : String},
    avaliacao : {type : Number, default : 0, min: 0, max: 5},
    atividades : [String],
});

const model = restful.model('clientes', ClienteSchema);
exports.model = model