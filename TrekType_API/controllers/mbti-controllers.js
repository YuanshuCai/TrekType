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
