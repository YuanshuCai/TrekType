/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("star_trek_characters").del();

  // Inserts seed entries
  await knex("star_trek_characters").insert([
    {
      character_name: "Captain Jean-Luc Picard",
      type_id: 1, // INTJ
    },
    {
      character_name: "Commander William Riker",
      type_id: 2, // ENTJ
    },
    {
      character_name: "Lieutenant Commander Data",
      type_id: 3, // INTP
    },
    {
      character_name: "Counselor Deanna Troi",
      type_id: 4, // INFJ
    },
    {
      character_name: "Lieutenant Worf",
      type_id: 5, // ISTJ
    },
    {
      character_name: "Chief Engineer Geordi La Forge",
      type_id: 6, // ISFJ
    },
    {
      character_name: "Doctor Beverly Crusher",
      type_id: 7, // ENFJ
    },
    {
      character_name: "Lieutenant Commander Tasha Yar",
      type_id: 8, // ESTP
    },
    {
      character_name: "Q",
      type_id: 9, // ENTP
    },
    {
      character_name: "Admiral Alynna Nechayev",
      type_id: 10, // ESTJ
    },
    {
      character_name: "Guinan",
      type_id: 11, // ESFJ
    },
    {
      character_name: "Reginald Barclay",
      type_id: 12, // ESFP
    },
    {
      character_name: "Miles O'Brien",
      type_id: 13, // ISTP
    },
    {
      character_name: "Kestra Troi",
      type_id: 14, // ISFP
    },
    {
      character_name: "Dr. Katherine Pulaski",
      type_id: 15, // INFP
    },
    {
      character_name: "Wesley Crusher",
      type_id: 16, // ENFP
    },
  ]);
}
