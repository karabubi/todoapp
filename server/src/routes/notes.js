import { Router } from "express";
import {
  getNotes,
  createNote,
  toggleDone,
  deleteNote,
} from "../controllers/notes.js";

const router = Router();

router.get("/", getNotes);
router.post("/", createNote);
router.post("/:id/done", toggleDone);
router.delete("/:id", deleteNote);

export default router;
