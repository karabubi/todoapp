import db from "../util/db-connect.js";

export async function createNote(req, res) {
  try {
    console.log(req.body);

    const newNote = await db("notes").insert(req.body).returning("*");
    // `INSERT INTO notes (title, description, done) VALUES (${req.body.title},${req.body.description},${req.body.done}, )`
    return res.json(newNote);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
}

export async function getNotes(_, res) {
  try {
    const notes = await db("notes"); // SELECT * FROM notes
    return res.json(notes);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
}

export async function toggleDone(req, res) {
  return res.json({ msg: "not implemented" });
}

export async function deleteNote(req, res) {
  try {
    const deletedRows = await db("notes")
      .where({ id: Number(req.params.id) })
      .del()
      .returning("*");
    if (deletedRows.length < 1) {
      return res.status(404).json({ msg: "Note not found" });
    }
    return res.json({ msg: "deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
}
