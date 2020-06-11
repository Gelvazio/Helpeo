const Item = require('../models/Item');

module.exports = {

    async store(req, res) {
        const { sequencia,
                codigo_nota,
                codigo_produto     ,
                valor_custo        ,
                valor_venda        ,
                codigo_grupo_fiscal,
                situacao           ,
                codigo_vendedor    ,        
                valor_comissao     ,        
                valor_frete        ,         
                } = req.body;
        
        let item = await Item.findOne({ sequencia, codigo_nota });       

        if (item){            
            return res.status(400).json({ message: 'Item já está cadastrado com esta sequencia para esta nota! Sequencia: ' + sequencia + ' nota:' + codigo_nota, retorno: false });
        }

        item = await Item.create({  sequencia,
                                    codigo_nota,
                                    codigo_produto     ,
                                    valor_custo        ,
                                    valor_venda        ,
                                    codigo_grupo_fiscal,
                                    situacao           ,
                                    codigo_vendedor    ,        
                                    valor_comissao     ,        
                                    valor_frete        ,});
        return res.status(200).json({ item });        
    },
    
    async index (req, res) {
        const { sequencia, codigo_nota } = req.body;
        if(sequencia && codigo_nota){
            const item = await Item.find( { sequencia, codigo_nota });
            return res.json( { item });
        } else if(codigo_nota){
            const item = await Item.find( { codigo_nota });
            return res.json( { item });
        }

        const items = await Item.find();
        
        return res.json( { items });        
    },

    async remove (req, res) {
        const { sequencia, codigo_nota } = req.body;        
        const item = await Item.find({ sequencia, codigo_nota });
        if (item) {
            const apagou = await Pessoa.remove( { codigo })
            return res.status(200).json({'mensagem':'Item removido!' + codigo });            
        }
        return res.status(200).json({'mensagem':'Item inexistente!'});
    },
};