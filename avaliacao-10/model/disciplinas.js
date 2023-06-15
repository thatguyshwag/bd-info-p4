const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  },
  useNullAsDefault: true
});

const Disciplinas = {
  getAll: async () => {
    return db('tb_disciplinas');
  },

  getById: async (id) => {
    return db('tb_disciplinas').where({ id }).first();
  },

  create: async (disciplina) => {
    return db('tb_disciplinas').insert(disciplina);
  },

  update: async (id, disciplina) => {
    return db('tb_disciplinas').where({ id }).update(disciplina);
  },

  delete: async (id) => {
    return db('tb_disciplinas').where({ id }).del();
  }
};
module.exports = Disciplinas;