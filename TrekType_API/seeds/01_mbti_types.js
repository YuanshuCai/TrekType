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
      type_character_id: "ISTJ01",
      type_strength: "Detail-oriented, reliable, and efficient.",
      type_shortcoming: "Can be rigid and overly cautious.",
    },
    {
      type_id: 2,
      type_name: "ISFJ",
      description:
        "The Protector: Warm-hearted, conscientious, and dedicated to duty.",
      type_character_id: "ISFJ02",
      type_strength: "Loyal, organized, and empathetic.",
      type_shortcoming:
        "Can be overly self-sacrificing and resistant to change.",
    },
    {
      type_id: 3,
      type_name: "INFJ",
      description:
        "The Advocate: Insightful, creative, and deeply concerned about others.",
      type_character_id: "INFJ03",
      type_strength: "Idealistic, compassionate, and principled.",
      type_shortcoming: "Can be overly sensitive and perfectionistic.",
    },
    {
      type_id: 4,
      type_name: "INTJ",
      description:
        "The Architect: Strategic, independent, and visionary thinkers.",
      type_character_id: "INTJ04",
      type_strength: "Logical, determined, and innovative.",
      type_shortcoming: "Can be overly critical and dismissive of emotions.",
    },
    {
      type_id: 5,
      type_name: "ISTP",
      description:
        "The Virtuoso: Bold, practical, and interested in hands-on activities.",
      type_character_id: "ISTP05",
      type_strength: "Adaptable, analytical, and resourceful.",
      type_shortcoming: "Can be risk-prone and easily bored.",
    },
    {
      type_id: 6,
      type_name: "ISFP",
      description:
        "The Adventurer: Sensitive, curious, and loves to explore new things.",
      type_character_id: "ISFP06",
      type_strength: "Creative, flexible, and spontaneous.",
      type_shortcoming: "Can be unpredictable and avoid conflict.",
    },
    {
      type_id: 7,
      type_name: "INFP",
      description:
        "The Mediator: Idealistic, reflective, and deeply empathetic.",
      type_character_id: "INFP07",
      type_strength: "Open-minded, caring, and imaginative.",
      type_shortcoming: "Can be overly idealistic and disorganized.",
    },
    {
      type_id: 8,
      type_name: "INTP",
      description:
        "The Thinker: Innovative, intellectual, and loves problem-solving.",
      type_character_id: "INTP08",
      type_strength: "Logical, open-minded, and independent.",
      type_shortcoming: "Can be overly analytical and detached.",
    },
    {
      type_id: 9,
      type_name: "ESTP",
      description: "The Entrepreneur: Energetic, bold, and action-oriented.",
      type_character_id: "ESTP09",
      type_strength: "Practical, resourceful, and charismatic.",
      type_shortcoming: "Can be impulsive and risk-seeking.",
    },
    {
      type_id: 10,
      type_name: "ESFP",
      description:
        "The Entertainer: Outgoing, spontaneous, and loves to live in the moment.",
      type_character_id: "ESFP10",
      type_strength: "Fun-loving, sociable, and observant.",
      type_shortcoming: "Can be easily distracted and avoid planning.",
    },
    {
      type_id: 11,
      type_name: "ENFP",
      description:
        "The Campaigner: Enthusiastic, imaginative, and loves new ideas and possibilities.",
      type_character_id: "ENFP11",
      type_strength: "Creative, energetic, and open-minded.",
      type_shortcoming: "Can be overly optimistic and scattered.",
    },
    {
      type_id: 12,
      type_name: "ENTP",
      description:
        "The Debater: Smart, curious, and loves to argue for fun and discovery.",
      type_character_id: "ENTP12",
      type_strength: "Quick-witted, innovative, and bold.",
      type_shortcoming: "Can be argumentative and dismissive of rules.",
    },
    {
      type_id: 13,
      type_name: "ESTJ",
      description:
        "The Executive: Organized, practical, and loves to take charge of situations.",
      type_character_id: "ESTJ13",
      type_strength: "Efficient, direct, and responsible.",
      type_shortcoming: "Can be stubborn and inflexible.",
    },
    {
      type_id: 14,
      type_name: "ESFJ",
      description:
        "The Consul: Caring, social, and always willing to help others.",
      type_character_id: "ESFJ14",
      type_strength: "Loyal, warm-hearted, and supportive.",
      type_shortcoming: "Can be overly concerned with others' opinions.",
    },
    {
      type_id: 15,
      type_name: "ENFJ",
      description:
        "The Protagonist: Charismatic, altruistic, and natural-born leaders.",
      type_character_id: "ENFJ15",
      type_strength: "Inspiring, empathetic, and organized.",
      type_shortcoming: "Can be overly idealistic and sensitive to criticism.",
    },
    {
      type_id: 16,
      type_name: "ENTJ",
      description:
        "The Commander: Bold, strategic, and loves taking leadership roles.",
      type_character_id: "ENTJ16",
      type_strength: "Efficient, confident, and strong-willed.",
      type_shortcoming: "Can be domineering and intolerant.",
    },
  ]);
}
