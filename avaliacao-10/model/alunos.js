const knex = require('knex');

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './SCA.db'
  },
  useNullAsDefault: true
});

const Alunos = {
  getAll: async () => {
    return db('tb_alunos');
  },

  getById: async (id) => {
    return db('tb_alunos').where({ id }).first();
  },

  create: async (aluno) => {
    return db('tb_alunos').insert(aluno);
  },

  update: async (id, aluno) => {
    return db('tb_alunos').where({ id }).update(aluno);
  },

  delete: async (id) => {
    return db('tb_alunos').where({ id }).del();
  }
};
module.exports = Alunos;