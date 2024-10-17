
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS notes;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    done BOOLEAN NOT NULL,    
    user_id INT NOT NULL,     
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)  
);


INSERT INTO users (name, email) VALUES
('Alice', 'alice@alice.com'),
('Bob', 'bob@bob.com'),
('Charlie', 'charlie@charlie.com');

INSERT INTO notes (title, description, done, user_id) VALUES
('Buy Coffee', 'also get some milk', FALSE, 1),    
('Dentist', 'appointment on friday', FALSE, 2),   
('Call Jeff', 'ideas for secret invention', FALSE, 3); 
