/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_Livros', table => {
        table.string('Titulo_Liv').primary()
        table.string('Genero_Liv').notNull()
        table.string('DataPubli_Liv').notNull()  
        table.string('Autor_Liv').notNull()
        table.foreign('Autor_Liv').references('tb_Autores.Nome_Aut')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tb_Livros')
};
