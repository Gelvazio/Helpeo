const mongoose = require('mongoose');

const RegistroCivilSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },    
    access_token:String,
    business:String,
    cell:String,
    cpf_cnpj:String,
    created_at:String,
    data_nascimento:String,
    email:String,
    endereco_migrado:String,
    home:String,
    newsletter:String,
    nome:String,
    razao_social:String,
    sobrenome:String,
    tipo_pessoa:String,
    updated_at:String,
    usuario_id_crc:String
});

module.exports = mongoose.model('RegistroCivil', RegistroCivilSchema);