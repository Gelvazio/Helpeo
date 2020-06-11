const mongoose = require('mongoose');

const PessoaSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        required: true,
        unique: true,
    },
    nome:String,
    cpf:Number,    
    endereco:String,    
    cidade:String,
    estado:String,
    telefone:String,
    email:String
});

module.exports = mongoose.model('Pessoa', PessoaSchema);