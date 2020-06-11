const mongoose = require('mongoose');

const TimeSchema = new mongoose.Schema({
    hora_inicio:String,        
    hora_fim:String,
    project_id:String
});

module.exports = mongoose.model('Time', TimeSchema);