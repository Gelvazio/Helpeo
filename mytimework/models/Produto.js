const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    codigo: {
        type: Number,
        required: true,
        unique: true,
    },
    descricao   : String,
    preco_custo : Number,    
    preco_venda : Number,    
    estoque     : Number,
    taxa_imposto: Number    
});

module.exports = mongoose.model('Produto', ProdutoSchema);