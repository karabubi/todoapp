SELECT * 
FROM notes
WHERE user_id = 1;
SELECT notes.title, notes.description, users.name AS username
FROM notes
JOIN users ON notes.user_id = users.id;
