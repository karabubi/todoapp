// Get users from the database

import db from "../util/db-connect.js";
export async function getUsers(_, res) {
  try {
    const users = await db("users");
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
}
// Login user

export async function loginUser(req, res) {
  const { username } = req.body; //name
  try {
    const user = await db("users").where({ username }).first(); // Fetch user by name  name

    if (!user) {
      return res.status(404).json({ msg: "User not found" }); // If no user found, send 404
    }

    return res.json({ msg: "Login successful", user }); // Return the user if found
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "error" });
  }
}
