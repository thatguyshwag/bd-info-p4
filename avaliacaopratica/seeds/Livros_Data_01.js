/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('tb_Livros')
    .del()
    .then(function() {
      return knex('tb_Livros').insert([
        { Titulo_Liv: '1984' , Genero_Liv: 'Ficção Politica', DataPubli_Liv: '08/06/1949', Autor_Liv: 'George Orwell'},
        { Titulo_Liv: 'O Pequeno Príncipe' , Genero_Liv: 'Literatura Infanto-juvenil', DataPubli_Liv: '**/04/1943', Autor_Liv: 'Antoine de Saint-Exupéry'},
      ]);
    })
};  