const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  },
  useNullAsDefault: true
});

const Professores = {
  getAll: async () => {
    return db('tb_professores');
  },

  getById: async (id) => {
    return db('tb_professores').where({ id }).first();
  },

  create: async (professor) => {
    return db('tb_professores').insert(professor);
  },

  update: async (id, professor) => {
    return db('tb_professores').where({ id }).update(professor);
  },

  delete: async (id) => {
    return db('tb_professores').where({ id }).del();
  }
};
module.exports = Professores;