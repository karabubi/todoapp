SELECT notes.title, notes.description, notes.done, users.name AS username
FROM notes
JOIN users ON notes.user_id = users.id;
