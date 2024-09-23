/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  const exists = await knex.schema.hasTable("star_trek_characters");
  if (!exists) {
    return knex.schema.createTable("star_trek_characters", (table) => {
      table.increments("character_id").primary();
      table.string("character_name").notNullable();
      table
        .integer("type_id")
        .unsigned()
        .references("type_id")
        .inTable("mbti_types")
        .onDelete("CASCADE");
      table.string("image_url");
      table.string("description");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTableIfExists("star_trek_characters");
}
