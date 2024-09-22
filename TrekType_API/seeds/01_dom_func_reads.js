exports.seed = function (knex) {
  return knex("dom_func_reads").insert([
    {
      dominant_function: "Ne",
      types: "ENFP, ENTP",
      description:
        "Extroverted Intuition: Focuses on possibilities and patterns. Very creative and spontaneous.",
    },
    {
      dominant_function: "Ni",
      types: "INFJ, INTJ",
      description:
        "Introverted Intuition: Focuses on deep insights, future predictions, and seeing abstract connections.",
    },
    {
      dominant_function: "Se",
      types: "ESTP, ESFP",
      description:
        "Extroverted Sensing: Engages with the world in a direct, hands-on way. Very focused on the present moment.",
    },
    {
      dominant_function: "Si",
      types: "ISTJ, ISFJ",
      description:
        "Introverted Sensing: Relies on past experiences to inform decisions. Very detail-oriented and practical.",
    },
    {
      dominant_function: "Te",
      types: "ENTJ, ESTJ",
      description:
        "Extroverted Thinking: Focuses on structure, organization, and achieving goals through logical systems.",
    },
    {
      dominant_function: "Ti",
      types: "INTP, ISTP",
      description:
        "Introverted Thinking: Analyzes complex systems and ideas to understand underlying principles.",
    },
    {
      dominant_function: "Fe",
      types: "ENFJ, ESFJ",
      description:
        "Extroverted Feeling: Concerned with harmony, relationships, and the emotional needs of others.",
    },
    {
      dominant_function: "Fi",
      types: "INFP, ISFP",
      description:
        "Introverted Feeling: Focuses on internal values and personal authenticity, striving to live in alignment with inner beliefs.",
    },
  ]);
};
