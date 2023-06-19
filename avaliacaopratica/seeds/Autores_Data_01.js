/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('tb_Autores')
    .del()
    .then(function() {
      return knex('tb_Autores').insert([
        { Nome_Aut: 'Antoine de Saint-Exupéry', Biografia_Aut: 'https://pt.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry', Nacionalidade_Aut: 'Frânces' },
        { Nome_Aut: 'George Orwell', Biografia_Aut: 'https://pt.wikipedia.org/wiki/George_Orwell', Nacionalidade_Aut: 'Britânico' },
      ]);
    })
};  