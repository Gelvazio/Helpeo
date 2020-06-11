exports.up = async function (knex) {

    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
    })
}

exports.down = async function (knex) {
    return knex.schema.dropTable('users');
}

/*
const User = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      unique: true,
  },
  name:String,
  password: {
      type: String,
      required: true,
      select: true,
      set: value => crypto
          .createHash('md5')
          .update(value)
          .digest('hex'),
  },
},
{
  timestamp: true,
  toJSON: { virtuals: true, getters: true},
  toObject: {virtuals: true, getters: true},
}
);

*/
