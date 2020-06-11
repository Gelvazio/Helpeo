const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    sequencia: {
        type: Number,
        required: true,
        unique: true,
    },
    codigo_nota: {
        type: Number,
        required: true,
        unique: true,
    },
    codigo_produto     :Number,
    valor_custo        :Number,
    valor_venda        :Number,
    codigo_grupo_fiscal:Number,
    situacao           :Number,//1 - normal, 2 - cancelado
    codigo_vendedor    :Number,        
    valor_comissao     :Number,        
    valor_frete        :Number,        
});

module.exports = mongoose.model('Item', ItemSchema);