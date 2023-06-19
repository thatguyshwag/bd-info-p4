const knex = require('knex');
const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './dev.sqlite3'
  }
});

class Livro {
  static async inserirLivro(livro) {
    try {
      const [id] = await database('tb_Livros').insert(livro);
      console.log('Livro inserido com ID:', id);
    } catch (error) {
      console.error('Erro ao inserir livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async atualizarLivro(Titulo_Liv, livro) {
    try {
      const result = await database('tb_Livros').where({ Titulo_Liv }).update(livro);
      console.log('Livro atualizado:', result);
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async obterLivro(Titulo_Liv) {
    try {
      const livro = await database('tb_Livros').where({ Titulo_Liv }).first();
      console.log('Livro encontrado:', livro);
    } catch (error) {
      console.error('Erro ao obter livro:', error);
    } finally {
      database.destroy();
    }
  }

  static async excluirLivro(Titulo_Liv) {
    try {
      const result = await database('tb_Livros').where({ Titulo_Liv }).del();
      console.log('Livro excluído:', result);
    } catch (error) {
      console.error('Erro ao excluir livro:', error);
    } finally {
      database.destroy();
    }
  }
}

module.exports = Livro;