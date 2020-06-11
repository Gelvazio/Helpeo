const Produto = require('../models/Produto');

module.exports = {

    async store(req, res) {
        const { 
                codigo,
                descricao, 
                preco_custo,
                preco_venda,
                estoque,
                taxa_imposto
                } = req.body;
        
        let produto_codigo = await Produto.findOne({ codigo });       

        if (produto_codigo){            
            return res.status(400).json({ message: 'Produto já está cadastrado com este codigo! Código: ' + codigo, retorno: false });
        }

        let produto_descricao = await Produto.findOne({ descricao });
        if (produto_descricao){            
            return res.status(400).json({ message: 'Produto já está cadastrado com esta descrição:' + descricao, retorno: false });
        }

        produto = await Produto.create({    codigo,
                                            descricao, 
                                            preco_custo,
                                            preco_venda,
                                            estoque,
                                            taxa_imposto });
        return res.status(200).json({ produto });        
    },
    
    async index (req, res) {
        const { codigo } = req.body;
        if(codigo){
            const produto = await Produto.find( { codigo });
            return res.json( { produto });
        }

        const produtos = await Produto.find( { codigo });
        
        return res.json( { produtos });
        
    },

    async remove (req, res) {
        const { codigo } = req.body;        
        const produto = await Produto.find({ codigo });
        if (produto) {
            const apagou = await Produto.remove( { codigo })
            return res.status(200).json({'mensagem':'Produto removido.' + codigo });            
        }
        return res.status(200).json({'mensagem':'Produto inexistente!'});
    },
};