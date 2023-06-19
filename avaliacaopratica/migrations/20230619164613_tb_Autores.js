/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tb_Autores', table => {
        table.string('Nome_Aut').primary()
        table.string('Biografia_Aut').notNull()
        table.string('Nacionalidade_Aut').notNull()  
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tb_Autores')
};
