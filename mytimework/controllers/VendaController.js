const Venda = require('../models/Venda');

module.exports = {

    async store(req, res) {
        const { codigo_nota,
                codigo_pessoa,
                codigo_condicao_pagamento,
                data_emissao        ,
                valor_custo_produtos,
                valor_venda_produtos,
                situacao            ,
                valor_total_impostos,
                valor_total_nota    ,
                valor_total_comissao,
                valor_total_frete   ,
                codigo_vendedor       
                } = req.body;
        
        let venda = await Venda.findOne({ codigo_nota });       

        if (venda){            
            return res.status(400).json({ message: 'Venda já está cadastrado com este código!nota:' + codigo_nota, retorno: false });
        }

        venda = await Venda.create({ codigo_nota,
                                     codigo_pessoa,
                                     codigo_condicao_pagamento,
                                     data_emissao        ,
                                     valor_custo_produtos,
                                     valor_venda_produtos,
                                     situacao            ,
                                     valor_total_impostos,
                                     valor_total_nota    ,
                                     valor_total_comissao,
                                     valor_total_frete   ,
                                     codigo_vendedor     ,   
                                });
        return res.status(200).json({ venda });        
    },
    
    async index (req, res) {
        //const { codigo_nota } = req.body;
        const codigo_nota = 1

        const venda = await Venda.find( { codigo_nota });
        if(venda){
            return res.json( { venda });            
        }

        return res.status(200).json({'mensagem':'Não foi informado código da Venda!'});
    },

    async remove (req, res) {
        const { codigo_nota } = req.body;        
        const venda = await Venda.find({ sequencia, codigo_nota });
        if (venda) {
            const apagou = await Venda.remove( { codigo_nota })
            return res.status(200).json({'mensagem':'Venda removida!' + codigo_nota });            
        }
        return res.status(200).json({'mensagem':'Venda inexistente!'});
    },
};