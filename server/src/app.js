import "dotenv/config";
import express, { json } from "express";
import cors from "cors";

import notesRoutes from "./routes/notes.js";
import userRoutes from "./routes/users.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(json());

app.get("/", (_, res) => {
  return res.json({ msg: "Hello World" });
});

app.use("/users", userRoutes);
app.use("/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("api running on port " + PORT);
});
