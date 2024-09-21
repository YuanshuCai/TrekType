/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("mbti_types").del();

  // Inserts seed entries
  await knex("mbti_types").insert([
    {
      type_id: 1,
      type_name: "ISTJ",
      description:
        "The Inspector: Responsible, serious, and traditional. They value loyalty and practicality.",
      character_id: 5,
      type_strength: "Detail-oriented, reliable, and efficient.",
      type_shortcoming: "Can be rigid and overly cautious.",
      dominant: "Si",
      auxiliary: "Te",
      tertiary: "Fi",
      inferior: "Ne",
    },
    {
      type_id: 2,
      type_name: "ISFJ",
      description:
        "The Protector: Warm-hearted, conscientious, and dedicated to duty.",
      character_id: 6,
      type_strength: "Loyal, organized, and empathetic.",
      type_shortcoming:
        "Can be overly self-sacrificing and resistant to change.",
      dominant: "Si",
      auxiliary: "Fe",
      tertiary: "Ti",
      inferior: "Ne",
    },
    {
      type_id: 3,
      type_name: "INFJ",
      description:
        "The Advocate: Insightful, creative, and deeply concerned about others.",
      character_id: 4,
      type_strength: "Idealistic, compassionate, and principled.",
      type_shortcoming: "Can be overly sensitive and perfectionistic.",
      dominant: "Ni",
      auxiliary: "Fe",
      tertiary: "Ti",
      inferior: "Se",
    },
    {
      type_id: 4,
      type_name: "INTJ",
      description:
        "The Architect: Strategic, independent, and visionary thinkers.",
      character_id: 1,
      type_strength: "Logical, determined, and innovative.",
      type_shortcoming: "Can be overly critical and dismissive of emotions.",
      dominant: "Ni",
      auxiliary: "Te",
      tertiary: "Fi",
      inferior: "Se",
    },
    {
      type_id: 5,
      type_name: "ISTP",
      description:
        "The Virtuoso: Bold, practical, and interested in hands-on activities.",
      character_id: 13,
      type_strength: "Adaptable, analytical, and resourceful.",
      type_shortcoming: "Can be risk-prone and easily bored.",
      dominant: "Ti",
      auxiliary: "Se",
      tertiary: "Ni",
      inferior: "Fe",
    },
    {
      type_id: 6,
      type_name: "ISFP",
      description:
        "The Adventurer: Sensitive, curious, and loves to explore new things.",
      character_id: 14,
      type_strength: "Creative, flexible, and spontaneous.",
      type_shortcoming: "Can be unpredictable and avoid conflict.",
      dominant: "Fi",
      auxiliary: "Se",
      tertiary: "Ni",
      inferior: "Te",
    },
    {
      type_id: 7,
      type_name: "INFP",
      description:
        "The Mediator: Idealistic, reflective, and deeply empathetic.",
      character_id: 15,
      type_strength: "Open-minded, caring, and imaginative.",
      type_shortcoming: "Can be overly idealistic and disorganized.",
      dominant: "Fi",
      auxiliary: "Ne",
      tertiary: "Si",
      inferior: "Te",
    },
    {
      type_id: 8,
      type_name: "INTP",
      description:
        "The Thinker: Innovative, intellectual, and loves problem-solving.",
      character_id: 3,
      type_strength: "Logical, open-minded, and independent.",
      type_shortcoming: "Can be overly analytical and detached.",
      dominant: "Ti",
      auxiliary: "Ne",
      tertiary: "Si",
      inferior: "Fe",
    },
    {
      type_id: 9,
      type_name: "ESTP",
      description: "The Entrepreneur: Energetic, bold, and action-oriented.",
      character_id: 8,
      type_strength: "Practical, resourceful, and charismatic.",
      type_shortcoming: "Can be impulsive and risk-seeking.",
      dominant: "Se",
      auxiliary: "Ti",
      tertiary: "Fe",
      inferior: "Ni",
    },
    {
      type_id: 10,
      type_name: "ESFP",
      description:
        "The Entertainer: Outgoing, spontaneous, and loves to live in the moment.",
      character_id: 12,
      type_strength: "Fun-loving, sociable, and observant.",
      type_shortcoming: "Can be easily distracted and avoid planning.",
      dominant: "Se",
      auxiliary: "Fi",
      tertiary: "Te",
      inferior: "Ni",
    },
    {
      type_id: 11,
      type_name: "ENFP",
      description:
        "The Campaigner: Enthusiastic, imaginative, and loves new ideas and possibilities.",
      character_id: 16,
      type_strength: "Creative, energetic, and open-minded.",
      type_shortcoming: "Can be overly optimistic and scattered.",
      dominant: "Ne",
      auxiliary: "Fi",
      tertiary: "Te",
      inferior: "Si",
    },
    {
      type_id: 12,
      type_name: "ENTP",
      description:
        "The Debater: Smart, curious, and loves to argue for fun and discovery.",
      character_id: 9,
      type_strength: "Quick-witted, innovative, and bold.",
      type_shortcoming: "Can be argumentative and dismissive of rules.",
      dominant: "Ne",
      auxiliary: "Ti",
      tertiary: "Fe",
      inferior: "Si",
    },
    {
      type_id: 13,
      type_name: "ESTJ",
      description:
        "The Executive: Organized, practical, and loves to take charge of situations.",
      character_id: 10,
      type_strength: "Efficient, direct, and responsible.",
      type_shortcoming: "Can be stubborn and inflexible.",
      dominant: "Te",
      auxiliary: "Si",
      tertiary: "Ne",
      inferior: "Fi",
    },
    {
      type_id: 14,
      type_name: "ESFJ",
      description:
        "The Consul: Caring, social, and always willing to help others.",
      character_id: 11,
      type_strength: "Loyal, warm-hearted, and supportive.",
      type_shortcoming: "Can be overly concerned with others' opinions.",
      dominant: "Fe",
      auxiliary: "Si",
      tertiary: "Ne",
      inferior: "Ti",
    },
    {
      type_id: 15,
      type_name: "ENFJ",
      description:
        "The Protagonist: Charismatic, altruistic, and natural-born leaders.",
      character_id: 7,
      type_strength: "Inspiring, empathetic, and organized.",
      type_shortcoming: "Can be overly idealistic and sensitive to criticism.",
      dominant: "Fe",
      auxiliary: "Ni",
      tertiary: "Se",
      inferior: "Ti",
    },
    {
      type_id: 16,
      type_name: "ENTJ",
      description:
        "The Commander: Bold, strategic, and loves taking leadership roles.",
      character_id: 2,
      type_strength: "Efficient, confident, and strong-willed.",
      type_shortcoming: "Can be domineering and intolerant.",
      dominant: "Te",
      auxiliary: "Ni",
      tertiary: "Se",
      inferior: "Fi",
    },
  ]);
}
