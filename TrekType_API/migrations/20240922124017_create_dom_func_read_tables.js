/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("mbti_functions", function (table) {
    table.increments("id").primary(); // Auto-incrementing primary key
    table.string("function").notNullable(); // MBTI function (Ne, Ni, etc.)
    table.string("types").notNullable(); // MBTI types associated with the function
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("mbti_functions");
};
