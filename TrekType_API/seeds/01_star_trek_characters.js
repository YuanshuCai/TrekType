/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("star_trek_characters").del();

  // Inserts seed entries with image URLs and funny descriptions
  await knex("star_trek_characters").insert([
    {
      character_id: 1,
      character_name: "Captain Jean-Luc Picard",
      type_id: 4, // INTJ
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881574/TrekType/jean-luc-pixel_wenyl7.png",
      description:
        "INTJ: The man who plans 10 steps ahead but still insists on drinking tea, Earl Grey, hot.",
    },
    {
      character_id: 2,
      character_name: "Commander William Riker",
      type_id: 16, // ENTJ
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881578/TrekType/william-riker-pixel_ws7j6v.png",
      description:
        "ENTJ: Bold leader, expert in giving side-eye while being the king of leg-over-chair entrances.",
    },
    {
      character_id: 3,
      character_name: "Lieutenant Commander Data",
      type_id: 8, // INTP
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881574/TrekType/commander-data-pixel_d8jcvv.png",
      description:
        "INTP: A robot that can outthink everyone but still doesn’t understand why jokes are funny.",
    },
    {
      character_id: 4,
      character_name: "Counselor Deanna Troi",
      type_id: 3, // INFJ
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726883132/TrekType/Counselor_Deanna_Troi_szasc9.png",
      description:
        "INFJ: Can sense your feelings before you even know what you're feeling... creepy but helpful.",
    },
    {
      character_id: 5,
      character_name: "Lieutenant Worf",
      type_id: 1, // ISTJ
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881576/TrekType/Lieutenant_Worf_ig1drw.png",
      description:
        "ISTJ: A Klingon who sticks to the rules, unless smashing stuff is an option. Honor first, smashing second.",
    },
    {
      character_id: 6,
      character_name: "Chief Engineer Geordi La Forge",
      type_id: 2, // ISFJ
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881574/TrekType/GeordiLaForge_c3jsbd.png",
      description:
        "ISFJ: Can fix anything on the ship, but fixing his love life? Yeah... still working on that.",
    },
    {
      character_id: 7,
      character_name: "Doctor Beverly Crusher",
      type_id: 15, // ENFJ
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881573/TrekType/Dr._Beverly_Crusher_xx1nnv.png",
      description:
        "ENFJ: Healer of the ship and hearts, though she’s really just trying to keep her son out of trouble.",
    },
    {
      character_id: 8,
      character_name: "Lieutenant Commander Tasha Yar",
      type_id: 9, // ESTP
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881577/TrekType/Tasha_Yar_cc6txc.png",
      description:
        "ESTP: The only one who rushes into action faster than a photon torpedo and somehow still looks cool doing it.",
    },
    {
      character_id: 9,
      character_name: "Q",
      type_id: 12, // ENTP
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881576/TrekType/Q_jh2rja.png",
      description:
        "ENTP: Intergalactic troll with godlike powers and a love for philosophical debates. Loves pushing Picard’s buttons.",
    },
    {
      character_id: 10,
      character_name: "Admiral Alynna Nechayev",
      type_id: 13, // ESTJ
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881578/TrekType/Alynna_Nechayev.png",
      description:
        "ESTJ: Runs Starfleet like a tight ship and has zero patience for nonsense. Her PADD is basically her weapon.",
    },
    {
      character_id: 11,
      character_name: "Guinan",
      type_id: 14, // ESFJ
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881574/TrekType/Guinan_gumqet.png",
      description:
        "ESFJ: The bartender who knows your problems before you even order a drink. Always with the sage advice.",
    },
    {
      character_id: 12,
      character_name: "Reginald Barclay",
      type_id: 10, // ESFP
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881576/TrekType/Reginald_Barclay_besb7j.png",
      description:
        "ESFP: Life of the party but socially awkward at work. Only Barclay can make holodeck addiction look kind of fun.",
    },
    {
      character_id: 13,
      character_name: "Miles O'Brien",
      type_id: 5, // ISTP
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726883131/TrekType/Miles_OBrien_cy7z8c.png",
      description:
        "ISTP: Always has a wrench, probably fixing something. Quiet, but if he starts talking, you should probably listen.",
    },
    {
      character_id: 14,
      character_name: "Kestra Troi",
      type_id: 6, // ISFP
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881575/TrekType/Kestra_Troi_qlymuw.png",
      description:
        "ISFP: Creative and sensitive, always off doing her own thing while the galaxy falls apart around her.",
    },
    {
      character_id: 15,
      character_name: "Dr. Katherine Pulaski",
      type_id: 7, // INFP
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881575/TrekType/Katherine_Pulaski_du60em.png",
      description:
        "INFP: Idealistic doctor who likes to challenge the status quo and Data's sense of humor (or lack thereof).",
    },
    {
      character_id: 16,
      character_name: "Wesley Crusher",
      type_id: 11, // ENFP
      image_url:
        "https://res.cloudinary.com/dgztdhc6a/image/upload/v1726881578/TrekType/Wesley_Crusher_jnui7s.png",
      description:
        "ENFP: Genius teenager who saves the ship more times than you can count but still somehow manages to get in trouble.",
    },
  ]);
}
