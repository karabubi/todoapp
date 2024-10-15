DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS notes;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE notes(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email) VALUES
  ('Alice', 'alice@alice.com'),
  ('Bob', 'bob@bob.com'),
  ('Charlie', 'charlie@charlie.com');

INSERT INTO notes (title, description) VALUES
  ('cofe', 'by cofe'),
  ('test', 'test'),
  ('test2', 'test2');