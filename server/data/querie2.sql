SELECT title, description, done
FROM notes
WHERE user_id = 1;
SELECT notes.title, notes.description, notes.done
FROM notes
JOIN users ON notes.user_id = users.id
WHERE users.name = 'Alice';
