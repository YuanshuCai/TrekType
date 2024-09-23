import dotenv from "dotenv";
import knex from "knex";
dotenv.config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
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
  const id = parseInt(req.params.id, 10);

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

export const getCharacterMBTI = (req, res) => {
  const characterId = parseInt(req.params.id, 10);

  if (isNaN(characterId)) {
    return res.status(400).send("Character ID must be a valid number");
  }

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
    .where("star_trek_characters.character_id", characterId)
    .first()
    .then((row) => {
      if (row) {
        res.status(200).json(row);
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
        res.status(200).json(rows);
      } else {
        res.status(404).send("No characters found");
      }
    })
    .catch((error) => {
      console.error("Error fetching all characters' MBTI types:", error);
      res.status(500).send("Failed to fetch characters' MBTI types");
    });
};

export const getPersonalityInfo = (req, res) => {
  const { type_name } = req.params;

  if (!type_name || typeof type_name !== "string") {
    return res.status(400).send("Invalid MBTI type name format");
  }

  db.select("*")
    .from("mbti_types")
    .where({ type_name })
    .first()
    .then((mbtiType) => {
      if (!mbtiType) {
        return res.status(404).send("MBTI type not found");
      }

      const { type_id } = mbtiType;

      db.select("*")
        .from("star_trek_characters")
        .where({ type_id })
        .first()
        .then((character) => {
          res.status(200).json({
            mbtiType,
            character: character || null,
          });
        })
        .catch((error) => {
          console.error(
            `Error fetching character for MBTI type: ${type_name}`,
            error
          );
          res.status(500).send("Failed to fetch character information");
        });
    })
    .catch((error) => {
      console.error(`Error fetching MBTI type: ${type_name}`, error);
      res.status(500).send("Failed to fetch MBTI type information");
    });
};
