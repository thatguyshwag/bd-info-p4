const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  }
});

class Autor {
  static async inserirAutor(autor) {
    try {
      const [id] = await database('tb_Autores').insert(autor);
      console.log('Autor inserido com ID:', id);
    } catch (error) {
      console.error('Erro ao inserir autor:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarAutor(id, autor) {
    try {
      const result = await database('tb_Autores').where({ id }).update(autor);
      console.log('Autor atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar autor:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterAutor(id) {
    try {
      const autor = await database('tb_Autores').where({ id }).first();
      console.log('Autor encontrado:', autor);
    } catch (error) {
      console.error('Erro ao obter autor:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirAutor(id) {
    try {
      const result = await database('tb_Autores').where({ id }).del();
      console.log('Autor excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir autor:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Autor;