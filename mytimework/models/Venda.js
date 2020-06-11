const mongoose = require('mongoose');

const VendaSchema = new mongoose.Schema({
    codigo_nota: {
        type: Number,
        required: true,
        unique: true,
    },
    codigo_pessoa:Number,
    codigo_condicao_pagamento:Number,
    data_emissao        :Date,
    valor_custo_produtos:Number,
    valor_venda_produtos:Number,
    situacao            :Number,//1 - normal, 2 - cancelado
    valor_total_impostos:Number,
    valor_total_nota    :Number,
    valor_total_comissao:Number,
    valor_total_frete   :Number,
    codigo_vendedor     :Number,    
});

module.exports = mongoose.model('Venda', VendaSchema);