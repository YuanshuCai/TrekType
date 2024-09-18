import "dotenv/config";
import cors from "cors";
import express from "express";
import mbtiRoute from "./routes/mbti-route.js";
import characterRoute from "./routes/character-route.js";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5050;

app.use("/personality-types", mbtiRoute);
app.use("/personality-types/:id", mbtiRoute);
app.use("/characters", characterRoute);
app.use("/characters/:id", characterRoute);
app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
