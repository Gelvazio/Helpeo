const knex = require('../database/connection')
const Serialized = require('../utils/Serialized')
const crypto = require('crypto');

module.exports = {

    async index(req, res) {
        const { user_id } = req.userId;

        const points = await knex('points').where('user_id', user_id);

        const serializedPoint = Serialized(points, 'points');

        return res.json(serializedPoint);
    },

    async show(req, res) {
        const user_id = req.body.userId

        if (user_id) {
            const user = await knex('users')
                .where('id', user_id).first()
                .select('id')
                .select('name')
                .select('email')
        } else {
            const user = await knex('users');
        }

        if (!user) {
            return res.status(404).json({error: "User not Found"})
        }

        return res.json(user);
    },

    async update(req, res) {
        const {user_id} = req.userId
        const {id} = req.params

        const {
            title,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            address,
            neighborhood,
            numbering,
            items
        } = req.body

        const point = await knex('points')
            .where('id', id)
            .where('user_id', user_id)
            .first()

        if (!point) return res.status(404).json({error: "Point not Found!"})

        const updateTo = {
            image: req.file.filename,
            title,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            address,
            neighborhood,
            numbering,
        }

        const trx = await knex.transaction()

        await trx('points')
            .where('id', id)
            .where('user_id', user_id)
            .update(updateTo)

        const pointItems = items.split(',')
            .map(item => Number(item.trim()))
            .map(item_id => {
                return {
                    item_id,
                    point_id: id,
                }
            })

        await trx('point_items')
            .where('point_id', id)
            .delete()

        await trx('point_items').insert(pointItems)

        await trx.commit()

        return res.json(updateTo)
    },

    async delete(req, res) {
        const email = req.query.email;

        const user = await knex('users')
            .where('email', email)
            .first();

        if (!user) {
          return res.status(404).json({error: "User not Found!"})
        }

        const trx = await knex.transaction()

        await trx('users')
            .where('email', email)
            .delete()

        await trx.commit()

        return res.status(200).json({status: true, message:'User deleted!'});
    },

    async all (req, res) {
      const users = await knex('users').orderBy('id', 'desc');

      return res.status(200).json(users);
    },

    async get(req, res) {
      const email = req.headers.email;

      const user = await knex('users')
          .where('email', email)
          .first();

      if (user) {
        return res.status(404).json({status: false, message: "User exists with email!E-mail" + email})
      }

      return res.status(200).json({status: true, message:'User not exists!'});
  },
}
