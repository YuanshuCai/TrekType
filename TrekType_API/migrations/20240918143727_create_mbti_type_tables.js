/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable("mbti_types", (table) => {
    table.increments("type_id").primary();
    table.string("type_name").notNullable();
    table.text("description").notNullable();
    table.string("type_character_id").notNullable();
    table.string("type_strength").notNullable();
    table.string("type_shortcoming").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("mbti_types");
}
