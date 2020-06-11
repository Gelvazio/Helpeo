const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const dotenv = require('dotenv');
const config = dotenv.config();

module.exports = {

    async store(req, res) {
        try {
            const email = req.body.email;

            const user = await UserModel.findOne({ email: email });
            if (user) {
                return res.status(400).json({"status": false,"mensagem":'Usuário já está cadastrado com este login!Login: ' + email});
            }

            const result = await UserModel.create(req.body);

            // Remove a senha de usuarios para não mostrar após o mesmo ser criado
            const { password, ...users } = result.toObject()

            const token = jwt.sign({user: users.id}, process.env.SECRET, { expiresIn: 86400});

            return res.status(200).json({ users, token });
        } catch (error){
            return res.status(400).json({"status": false,"mensagem": 'Error on create user!' + error });
        }
    },

    // retorna o usuario e o token
    async login(req, res) {
        const [ hashType, hash ]  = req.headers.authorization.split(' ');
        const [ email, password ] = Buffer.from(hash, 'base64').toString().split(':');

        const user = await UserModel.findOne({ email });
        if(user){
            if(password == user.password){
                const token = jwt.sign({user: user.id}, process.env.SECRET, {expiresIn: process.env.SECRET_TIME_EXPIRES});

                return res.status(200).json({user , token });
            }
            return res.status(200).json({"status": false , 'mensagem':'senha inválida!' });
        }

        return res.status(401).json({'mensagem':'Usuario não encontrado!'});
    },

    async validaLogin(req, res) {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if(user){
            let password_crypto = crypto
                .createHash('md5')
                .update(password)
                .digest('hex');

            if(password_crypto == user.password){
                const token = jwt.sign({user: user.id}, process.env.SECRET, {expiresIn: process.env.SECRET_TIME_EXPIRES});

                return res.status(200).json({"status": true, user , token});
            }
            return res.status(401).json({"status": false , 'mensagem':'senha inválida!' });
        }

        return res.status(401).json({'mensagem':'Usuario não encontrado!'});
    },

    async delete(req, res) {
        const { email } = req.body;

        if(email) {
            const user = await UserModel.findOne({ email });
            if (user) {
                const apagou = await UserModel.remove( { email })
                return res.status(200).json({'mensagem':'Usuário removido.' + email });
            }
            return res.status(401).json({'mensagem':'Usuário não encontrado com este login:' + email});
        }
        return res.status(401).json({'mensagem': 'Informe um login!'});
    },

    async deleteAll(req, res) {
        const apagou = await UserModel.remove();
        return res.status(200).json({"status": true, 'mensagem': 'Todos usuários apagados'});
    },

    async index(req, res) {
        const users = await UserModel.find();
        return res.json({users});
    },
};