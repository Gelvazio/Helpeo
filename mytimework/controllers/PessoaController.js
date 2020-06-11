const Pessoa = require('../models/Pessoa');

module.exports = {

    async store(req, res) {
        const { codigo,
                nome,
                cpf ,    
                endereco,    
                cidade  ,
                estado  ,
                telefone,
                email   
                } = req.body;
        
        let pessoa_codigo = await Pessoa.findOne({ codigo });       

        if (pessoa_codigo){            
            return res.status(400).json({ message: 'Pessoa já está cadastrado com este codigo! Código: ' + codigo, retorno: false });
        }

        pessoa = await Pessoa.create({  codigo,
                                        nome,
                                        cpf ,    
                                        endereco,    
                                        cidade  ,
                                        estado  ,
                                        telefone,
                                        email});
        return res.status(200).json({ pessoa });        
    },
    
    async index (req, res) {
        const { codigo } = req.body;
        if(codigo){
            const pessoa = await Pessoa.find( { codigo });
            return res.json( { pessoa });
        }

        const pessoas = await Pessoa.find( { codigo });
        
        return res.json( { pessoas });        
    },

    async remove (req, res) {
        const { codigo } = req.body;        
        const pessoa = await Pessoa.find({ codigo });
        if (pessoa) {
            const apagou = await Pessoa.remove( { codigo })
            return res.status(200).json({'mensagem':'Pessoa removida.' + codigo });            
        }
        return res.status(200).json({'mensagem':'Pessoa inexistente!'});
    },
};