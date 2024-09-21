/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("mbti_types", (table) => {
    table.increments("id").primary();
    table.integer("type_id").notNullable();
    table.string("type_name").notNullable();
    table.text("description").notNullable();
    table.integer("character_id").notNullable();
    table.text("type_strength").notNullable();
    table.text("type_shortcoming").notNullable();
    table.string("dominant").notNullable();
    table.string("auxiliary").notNullable();
    table.string("tertiary").notNullable();
    table.string("inferior").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("mbti_types");
}
