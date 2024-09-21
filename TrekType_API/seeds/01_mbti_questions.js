/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("mbti_questions").del();

  // Inserts seed entries
  await knex("mbti_questions").insert([
    {
      id: 1,
      text: "You seek to explore the unknown corners of the universe purely for the sake of gaining new knowledge.",
      function: "Ne",
    },
    {
      id: 2,
      text: "You are hesitant to strictly conform to established protocols and rules, often finding alternative solutions.",
      function: "Fi",
    },
    {
      id: 3,
      text: "You understand complex scientific or tactical situations by recognizing patterns from previous encounters.",
      function: "Ti",
    },
    {
      id: 4,
      text: "You frequently have hunches or insights about future events that often turn out to be correct.",
      function: "Ni",
    },
    {
      id: 5,
      text: "You have an excellent sense of direction, whether navigating star systems or unfamiliar environments.",
      function: "Se",
    },
    {
      id: 6,
      text: "You consider yourself highly organized, often stepping in to take control of situations before they escalate.",
      function: "Te",
    },
    {
      id: 7,
      text: "You value logic and reason above all else, relying on data and evidence to guide your decisions.",
      function: "Ti",
    },
    {
      id: 8,
      text: "You often relate present experiences to past events, using that information to make informed decisions.",
      function: "Si",
    },
    {
      id: 9,
      text: "You develop detailed frameworks and systems to understand the complexities of the universe around you.",
      function: "Ti",
    },
    {
      id: 10,
      text: "You are fiercely independent and take pride in your unique approach to challenges.",
      function: "Fi",
    },
    {
      id: 11,
      text: "You are drawn to abstract concepts and often ponder the deeper meanings of directives or principles.",
      function: "Ne",
    },
    {
      id: 12,
      text: "You engage with new projects or missions with excitement, but quickly lose interest once the novelty wears off.",
      function: "Se",
    },
    {
      id: 13,
      text: "You hold yourself to a higher moral standard than others and expect the same from those around you.",
      function: "Fi",
    },
    {
      id: 14,
      text: "You become frustrated when your efforts to help others go unappreciated or unnoticed.",
      function: "Fe",
    },
    {
      id: 15,
      text: "You thrive on new, exciting experiences, seeking out the unknown and unexplored.",
      function: "Se",
    },
    {
      id: 16,
      text: "You express yourself with honesty and authenticity, staying true to your personal values.",
      function: "Fi",
    },
    {
      id: 17,
      text: "You place a great amount of trust in your instincts, often following mysterious or unconscious insights.",
      function: "Ni",
    },
    {
      id: 18,
      text: "You would do whatever it takes to win an argument or debate, often using reason and evidence to prove your point.",
      function: "Te",
    },
    {
      id: 19,
      text: "You value inclusion, always striving to ensure that everyone in a group feels involved and heard.",
      function: "Fe",
    },
    {
      id: 20,
      text: "You go out of your way to help others, sometimes forgetting to take care of your own needs.",
      function: "Fe",
    },
    {
      id: 21,
      text: "You easily recognize your body's internal sensations and adjust to your physical needs accordingly.",
      function: "Se",
    },
    {
      id: 22,
      text: "You prefer to follow a consistent routine and are uncomfortable with sudden changes.",
      function: "Si",
    },
    {
      id: 23,
      text: "You tend to resist change, preferring the familiar and reliable over the new and uncertain.",
      function: "Si",
    },
    {
      id: 24,
      text: "You have a strong tendency to view situations in terms of clear rights and wrongs.",
      function: "Fi",
    },
    {
      id: 25,
      text: "You easily sympathize with the struggles of others, often putting yourself in their shoes.",
      function: "Fe",
    },
    {
      id: 26,
      text: "You become resolute and unwavering when your personal beliefs are challenged.",
      function: "Fi",
    },
    {
      id: 27,
      text: "You prefer to live in the present moment, focusing on what's happening here and now.",
      function: "Se",
    },
    {
      id: 28,
      text: "You excel at solving complex problems and analyzing situations with great depth.",
      function: "Ti",
    },
    {
      id: 29,
      text: "You sometimes struggle to communicate your ideas clearly to others.",
      function: "Fi",
    },
    {
      id: 30,
      text: "You tend to work through problems independently, distancing yourself from others to reach a solution.",
      function: "Ti",
    },
    {
      id: 31,
      text: "You often feel as though your intuitive insights or ideas go misunderstood by others.",
      function: "Ni",
    },
    {
      id: 32,
      text: "You are highly skilled at recognizing when the details in front of you don't match previous experiences.",
      function: "Si",
    },
    {
      id: 33,
      text: "You frequently start new projects but find it difficult to finish them.",
      function: "Ne",
    },
    {
      id: 34,
      text: "You are often described as being stuck in your ways or resistant to change.",
      function: "Si",
    },
    {
      id: 35,
      text: "You make a conscious effort to communicate tactfully and respectfully with others.",
      function: "Fe",
    },
    {
      id: 36,
      text: "You are fascinated by symbolism and the unknown, often exploring deeper, unseen meanings.",
      function: "Ni",
    },
    {
      id: 37,
      text: "You streamline existing systems and processes to increase efficiency and productivity.",
      function: "Te",
    },
    {
      id: 38,
      text: "You exude charisma and others often find you charming or engaging.",
      function: "Fe",
    },
    {
      id: 39,
      text: "You place great value on details from past experiences when making decisions.",
      function: "Si",
    },
    {
      id: 40,
      text: "You can read others' body language and use it to subtly influence conversations.",
      function: "Fe",
    },
    {
      id: 41,
      text: "You are always willing to question everything, even well-established ideas.",
      function: "Ti",
    },
    {
      id: 42,
      text: "You greatly value social harmony and often go out of your way to maintain it within a group.",
      function: "Fe",
    },
    {
      id: 43,
      text: "You follow a strict internal moral code, regardless of what external rules may dictate.",
      function: "Fi",
    },
    {
      id: 44,
      text: "You are extremely objective, always telling things as they are, no matter the circumstances.",
      function: "Te",
    },
    {
      id: 45,
      text: "You would prefer to sugarcoat a problem rather than upset someone.",
      function: "Fe",
    },
    {
      id: 46,
      text: "You feel a strong sense of unity when working within a well-coordinated team.",
      function: "Fe",
    },
    {
      id: 47,
      text: "You are blunt and straight-to-the-point when communicating, valuing clarity over diplomacy.",
      function: "Te",
    },
    {
      id: 48,
      text: "You often imagine concepts that aren't directly connected to the tangible world.",
      function: "Ne",
    },
    {
      id: 49,
      text: "You prefer to solve problems by collaborating with others, involving yourself in group discussions.",
      function: "Fe",
    },
    {
      id: 50,
      text: "You are highly attuned to the external environment, noticing even the smallest details.",
      function: "Se",
    },
    {
      id: 51,
      text: "You may find that your emotional responses to situations can be perceived as overly sensitive or reactive.",
      function: "Fi",
    },
    {
      id: 52,
      text: "You sometimes appear scattered or unfocused, as though your mind is jumping between ideas.",
      function: "Ne",
    },
    {
      id: 53,
      text: "You often arrive at sudden realizations or insights without being able to explain how you got there.",
      function: "Ni",
    },
    {
      id: 54,
      text: "You find it difficult to focus on one subject for an extended period and are easily distracted by new ideas.",
      function: "Ne",
    },
    {
      id: 55,
      text: "You consider yourself to be a practical person, firmly grounded in reality without getting lost in imagination.",
      function: "Si",
    },
    {
      id: 56,
      text: "You see a multitude of possibilities in any given situation, often making it hard to commit to just one path.",
      function: "Ne",
    },
    {
      id: 57,
      text: "You have a keen appreciation for beauty and aesthetics, enjoying the finer things in life.",
      function: "Se",
    },
    {
      id: 58,
      text: "You prefer to think through every detail thoroughly before putting a solution into action, even if it takes more time.",
      function: "Ti",
    },
    {
      id: 59,
      text: "You may sometimes be perceived as inauthentic or manipulative by others, especially in social settings.",
      function: "Fe",
    },
    {
      id: 60,
      text: "You are highly aware of your surroundings and rarely miss anything that happens right in front of you.",
      function: "Se",
    },
    {
      id: 61,
      text: "You continuously refine your internal logical frameworks to ensure they align with new data and discoveries.",
      function: "Ti",
    },
    {
      id: 62,
      text: "You tend to show sympathy only after you've personally empathized with someone's situation.",
      function: "Fe",
    },
    {
      id: 63,
      text: "You rely heavily on external sources and facts to support your arguments, often citing evidence and data.",
      function: "Te",
    },
    {
      id: 64,
      text: "You are able to see the big picture in a complex situation, making sense of seemingly unrelated details.",
      function: "Ne",
    },
    {
      id: 65,
      text: "You prefer to live in the present, focusing on what's immediately in front of you rather than thinking about the past or future.",
      function: "Se",
    },
    {
      id: 66,
      text: "You believe that reaching the truth is more important than winning an argument or being right.",
      function: "Ti",
    },
    {
      id: 67,
      text: "You can easily come up with something spontaneous to say, often adding a creative twist to conversations.",
      function: "Ne",
    },
    {
      id: 68,
      text: "You tend to brainstorm and offer a multitude of different ideas when presented with a problem.",
      function: "Ne",
    },
    {
      id: 69,
      text: "You find insincerity and inauthentic behavior particularly frustrating, especially in personal relationships.",
      function: "Fi",
    },
    {
      id: 70,
      text: "You rely heavily on past experiences to guide you through the present, preferring to stick to familiar methods.",
      function: "Si",
    },
    {
      id: 71,
      text: "You feel as though genuine kindness is rare, and you pride yourself on being one of the few who embody it.",
      function: "Fi",
    },
    {
      id: 72,
      text: "You greatly value tradition and duty, often adhering to long-established systems and norms.",
      function: "Si",
    },
    {
      id: 73,
      text: "You constantly set goals and objectives for yourself, striving to achieve them efficiently.",
      function: "Te",
    },
    {
      id: 74,
      text: "You may be perceived as controlling or meddlesome when you try to improve or organize situations.",
      function: "Te",
    },
    {
      id: 75,
      text: "You are drawn to the new and novel, constantly seeking original ideas and uncharted territories.",
      function: "Ne",
    },
    {
      id: 76,
      text: "You have an uncanny ability to recognize others' needs and are often quick to act to meet them.",
      function: "Fe",
    },
    {
      id: 77,
      text: "You enjoy organizing things in your environment, finding pleasure in keeping things in order.",
      function: "Si",
    },
    {
      id: 78,
      text: "You find it challenging to communicate with people who think differently than you do, often leading to misunderstandings.",
      function: "Ti",
    },
    {
      id: 79,
      text: "You feel unnerved by uncertainty and the unknown, preferring clarity and structure in your life.",
      function: "Ni",
    },
    {
      id: 80,
      text: "You place a great deal of trust in hard facts and data, valuing them over speculation or intuition.",
      function: "Te",
    },
    {
      id: 81,
      text: "You often have a deep sense of knowing things without being able to fully explain how you arrived at that knowledge.",
      function: "Ni",
    },
    {
      id: 82,
      text: "You frequently use analogies and metaphors to communicate new ideas, making abstract concepts easier to understand.",
      function: "Ne",
    },
    {
      id: 83,
      text: "You sometimes fail to adapt to new information because it conflicts with your previous understanding or experiences.",
      function: "Si",
    },
    {
      id: 84,
      text: "You have a tendency to go off-topic in conversations, often exploring tangents and unrelated ideas.",
      function: "Ne",
    },
    {
      id: 85,
      text: "You often feel awkward or aimless during moments of leisure when you don't have something to focus on.",
      function: "Si",
    },
    {
      id: 86,
      text: "You frequently use metaphors and creative comparisons to explain your thoughts and ideas.",
      function: "Ne",
    },
    {
      id: 87,
      text: "You have been consistently logical throughout your life, relying on reason and rational thinking.",
      function: "Ti",
    },
    {
      id: 88,
      text: "You prefer the comfort of staying at home or in familiar environments over exploring new places.",
      function: "Si",
    },
    {
      id: 89,
      text: "You have vivid and detailed memories of events from a very young age, often recalling them with clarity.",
      function: "Si",
    },
    {
      id: 90,
      text: "You are deeply loyal to your family and loved ones, often prioritizing their needs over your own.",
      function: "Fi",
    },
    {
      id: 91,
      text: "You sometimes fail to notice details in your environment and may be perceived as clumsy or absent-minded.",
      function: "Se",
    },
    {
      id: 92,
      text: "You value comfort over fashion, preferring to feel at ease rather than making a statement with your appearance.",
      function: "Si",
    },
    {
      id: 93,
      text: "You believe that being kind and considerate is more important than being intellectually superior.",
      function: "Fe",
    },
    {
      id: 94,
      text: "You prefer tried-and-true systems over untested innovations, sticking to what has been proven to work.",
      function: "Si",
    },
    {
      id: 95,
      text: "How you're dressed and presented affects how others perceive you, and you take this into consideration.",
      function: "Fe",
    },
    {
      id: 96,
      text: "You excel at organizing a team of people, making sure everyone is performing their role efficiently.",
      function: "Te",
    },
    {
      id: 97,
      text: "You consider yourself more grounded and realistic than dreamy or imaginative.",
      function: "Te",
    },
    {
      id: 98,
      text: "You hold strong personal values and stick to them, regardless of what others might think.",
      function: "Fi",
    },
    {
      id: 99,
      text: "You would consider yourself more conservative, preferring the tried-and-true ways of doing things.",
      function: "Si",
    },
  ]);
}
