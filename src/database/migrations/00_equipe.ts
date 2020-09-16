import Knex from 'knex';

//funcao que altera o db, na tabela especifica -> nessa caso  cria a tabela "equipe"
export async function up(knex: Knex){
    return knex.schema.createTable('equipe', table =>{
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('instituicao').notNullable();
        table.string('linkedin').notNullable();
        table.string('foto').notNullable();
        table.string('projetos').notNullable();
        table.text('bio').notNullable();
    });
}

//desfaz as alterações feitas pela função anterior -> no caso sua criação
export async function down(knex: Knex){
    return knex.schema.dropTable('equipe')
}
