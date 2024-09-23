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

export const getCharacters = (req, res) => {
  db.select("*")
    .from("star_trek_characters")
    .then((rows) => {
      res.status(200).json(rows);
    })
    .catch((error) => {
      console.error(
        "Unable to process query for fetching star-trek characters:",
        error
      );
      res.status(500).send("Failed to fetch star-trek characters");
    });
};

export const getSingleCharacter = (req, res) => {
  const id = parseInt(req.params.id, 10); //use parseInt to avoid potential SQL injection or string mismatch issues

  if (isNaN(id)) {
    return res.status(400).send("Invalid ID format");
  }

  db.select("*")
    .from("star_trek_characters")
    .where({ character_id: id })
    .first()
    .then((row) => {
      if (row) {
        res.status(200).json(row);
      } else {
        res.status(404).send("star-trek character not found");
      }
    })
    .catch((error) => {
      console.error(`Error fetching star-trek character for ID: ${id}`, error);
      res.status(500).send("Failed to fetch star-trek character");
    });
};
