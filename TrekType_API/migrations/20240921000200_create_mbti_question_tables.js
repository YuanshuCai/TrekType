/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable("mbti_questions", function (table) {
    table.increments("id").primary();
    table.string("text").notNullable();
    table.string("function").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable("mbti_questions"); // Drops the table if the migration is rolled back
}
