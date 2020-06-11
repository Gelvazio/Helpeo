const Project = require('../models/Project');

module.exports = {

    async store(req, res) {
        const { descricao, started_at, ended_at } = req.body;
        
        let project = await Project.findOne({ descricao });

        if (project){            
            return res.status(400).json({ message: 'Projeto já está cadastrado com este nome!', retorno: false });
        }

        project = await Project.create({ descricao, started_at, ended_at });

        return res.status(200).json({ project });
    },
    
    async index (req, res) {
        const projects = await Project.find();

        return res.json( { projects });
    },
};