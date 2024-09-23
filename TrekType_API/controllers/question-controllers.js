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

export const getQuestions = (req, res) => {
  db.select("*")
    .from("mbti_questions")
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
