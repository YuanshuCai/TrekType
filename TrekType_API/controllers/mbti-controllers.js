import dotenv from "dotenv";
import knex from "knex";
dotenv.config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

// Ensure that all required environment variables are available
if (!DB_HOST || !DB_NAME || !DB_USER || !DB_PASSWORD) {
  console.error(
    "Missing required environment variables for database connection."
  );
  process.exit(1);
}

const db = knex({
  client: "mysql2",
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  },
});

export const getPersonalityTypes = (req, res) => {
  db.select("*")
    .from("mbti_types")
    .then((rows) => {
      res.status(200).json(rows);
    })
    .catch((error) => {
      console.error(
        "Unable to process query for fetching personality types:",
        error
      );
      res.status(500).send("Failed to fetch personality types");
    });
};

export const getSinglePersonality = (req, res) => {
  const id = parseInt(req.params.id, 10); //use parseInt to avoid potential SQL injection or string mismatch issues

  if (isNaN(id)) {
    return res.status(400).send("Invalid ID format");
  }

  db.select("*")
    .from("mbti_types")
    .where({ type_id: id })
    .first()
    .then((row) => {
      if (row) {
        res.status(200).json(row);
      } else {
        res.status(404).send("Personality type not found");
      }
    })
    .catch((error) => {
      console.error(`Error fetching personality type for ID: ${id}`, error);
      res.status(500).send("Failed to fetch personality type");
    });
};

export const findMBTIType = (req, res) => {
  const { dominant, auxiliary, tertiary, inferior } = req.body; // Expect cognitive functions from the front-end

  if (!dominant || !auxiliary || !tertiary || !inferior) {
    return res.status(400).send("Cognitive functions missing in request");
  }

  // Query mbti_types table to find the matching cognitive functions
  db.select("*")
    .from("mbti_types")
    .where({
      dominant: dominant,
      auxiliary: auxiliary,
      tertiary: tertiary,
      inferior: inferior,
    })
    .first() // Get the first matching type
    .then((row) => {
      if (row) {
        res.status(200).json(row);
      } else {
        res.status(404).send("No matching MBTI type found");
      }
    })
    .catch((error) => {
      console.error(
        "Error querying for MBTI type based on cognitive functions:",
        error
      );
      res.status(500).send("Failed to find MBTI type");
    });
};
export const getCharacterMBTI = (req, res) => {
  const characterId = parseInt(req.params.id, 10); // Get the character's ID from the route

  if (isNaN(characterId)) {
    return res.status(400).send("Character ID must be a valid number");
  }

  // Perform a SQL join between star_trek_characters and mbti_types based on type_id
  db.select(
    "star_trek_characters.character_name",
    "star_trek_characters.image_url",
    "star_trek_characters.description as character_description",
    "mbti_types.*"
  )
    .from("star_trek_characters")
    .join(
      "mbti_types",
      "star_trek_characters.type_id",
      "=",
      "mbti_types.type_id"
    ) // Join based on type_id
    .where("star_trek_characters.character_id", characterId) // Use character_id for filtering
    .first() // Get the first matching result
    .then((row) => {
      if (row) {
        res.status(200).json(row); // Return the character and MBTI info
      } else {
        res.status(404).send("Character not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching character's MBTI type:", error);
      res.status(500).send("Failed to fetch character's MBTI type");
    });
};
export const getAllCharactersMBTI = (req, res) => {
  db.select(
    "star_trek_characters.character_name",
    "star_trek_characters.image_url",
    "star_trek_characters.description as character_description",
    "mbti_types.*"
  )
    .from("star_trek_characters")
    .join(
      "mbti_types",
      "star_trek_characters.type_id",
      "=",
      "mbti_types.type_id"
    )
    .then((rows) => {
      if (rows.length > 0) {
        res.status(200).json(rows); // Return all characters and their MBTI info
      } else {
        res.status(404).send("No characters found");
      }
    })
    .catch((error) => {
      console.error("Error fetching all characters' MBTI types:", error);
      res.status(500).send("Failed to fetch characters' MBTI types");
    });
};
