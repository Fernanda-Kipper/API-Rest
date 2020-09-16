import * as Knex from "knex";


export async function up(knex: Knex){
    return  knex.schema.table('equipe', table =>{
        table.text('bio').notNullable();
})}


export async function down(knex: Knex){
    return  knex.schema.table('equipe', table =>{
        table.dropColumn('bio');
})}