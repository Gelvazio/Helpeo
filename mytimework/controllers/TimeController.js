const Time = require('../models/Time');

const Project = require('../models/Project');

module.exports = {

    async store(req, res) {
        const { project_id } = req.headers;
        const { hora_inicio, hora_fim } = req.body;
        
        //return res.json({ hora_inicio,  hora_fim });

        //Verifica se existe algum projeto neste periodo de tempo
        var gte = { hora_inicio : {$in : '08:09:57'}}

        let aListaTime = await Time.find(gte, { hora_inicio });

        
        var hora    = hora_inicio.split(':')[0];
        var minuto  = hora_inicio.split(':')[1];
        var segundo = hora_inicio.split(':')[2];
        
        hora_inicio_int = parseInt(hora + minuto + segundo);

        hora    = hora_fim.split(':')[0];
        minuto  = hora_fim.split(':')[1];
        segundo = hora_fim.split(':')[2];

        hora_fim_int = parseInt(hora + minuto + segundo);
        
        return res.json({ hora, minuto, segundo, hora_inicio_int, hora_fim_int });

        /*
        let project = await Project.findById(project_id);

        if (!project){            
            return res.status(400).json({ message: 'Projeto nao está cadastrado!', retorno: false });
        }

        time = await Time.create({ hora_inicio, hora_fim, project_id });

        return res.status(200).json({ time });

        */
    },
};