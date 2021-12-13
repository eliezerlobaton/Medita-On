CREATE DATABASE dbMeditaOn;

USE dbMeditaOn;

ALTER SCHEMA dbMeditaOn
DEFAULT COLLATE latin1_general_ci;

CREATE TABLE users( 

	id INT PRIMARY KEY AUTO_INCREMENT,
    frist_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth DATE DEFAULT(NULL),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL

);

CREATE TABLE speeches(

	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL UNIQUE,
    speakers VARCHAR(50) NOT NULL,
    duration DECIMAL(4,2) NOT NULL,
    confirmed_date DATE NOT NULL,
    description TEXT NOT NULL

);

CREATE TABLE phrases(

	id INT PRIMARY KEY AUTO_INCREMENT,
    phrase VARCHAR(255) NOT NULL,
    author VARCHAR(50) NOT NULL,
    creation_date DATE NOT NULL

);

CREATE TABLE favorite_phrases(

	id INT PRIMARY KEY AUTO_INCREMENT,
    id_phrase INT NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY(id_phrase)
    REFERENCES phrases(id),
    FOREIGN KEY(id_user)
    REFERENCES users(id)

);

CREATE TABLE bookings(
	
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_speeche INT NOT NULL,
    id_user INT NOT NULL,
    FOREIGN KEY(id_speeche)
    REFERENCES speeches(id),
    FOREIGN KEY(id_user)
    REFERENCES users(id)

);

CREATE TABLE permissions(

	id INT PRIMARY KEY AUTO_INCREMENT,
    id_user INT NOT NULL,
    administrator BOOLEAN DEFAULT(FALSE),
    speaker BOOLEAN DEFAULT(FALSE),
    FOREIGN KEY(id_user)
    REFERENCES users(id)

);

INSERT INTO users(frist_name, last_name, birth, email, password)
VALUES
('Vinicios', 'Anhas', '1996-02-10', 'vinicios@gmail.com', 123);

SELECT * FROM users;

INSERT INTO phrases(phrase, author, creation_date)
VALUES
('So sei que nada sei', 'Fulano', '2000-01-01');

SELECT * FROM phrases;

INSERT INTO favorite_phrases(id_phrase, id_user)
VALUES
(1,1);

SELECT * FROM favorite_phrases;

SELECT user.frist_name,
phrase.phrase, phrase.author
FROM
favorite_phrases
INNER JOIN users user
ON
user.id = favorite_phrases.id_user
INNER JOIN phrases phrase
ON
phrase.id = favorite_phrases.id_phrase;

INSERT INTO permissions(id_user, administrator, speaker)
VALUES
(1, TRUE, TRUE);

SELECT * FROM permissions;

SELECT user.frist_name, user.email,
permission.administrator, permission.speaker
FROM
permissions permission
INNER JOIN users user
ON
user.id = permission.id_user;

INSERT INTO speeches(title, speakers, duration, confirmed_date, description)
VALUES
('Primeira palestra', 'Ciclano', 1.20, '2021-12-12', "Primeira palestra inserida no banco");

SELECT * FROM speeches;

INSERT INTO bookings(id_speeche, id_user)
VALUES
(1, 1);

SELECT u.frist_name,
s.title, s.speakers,
s.duration, s.confirmed_date
FROM
bookings
INNER JOIN users u
ON
u.id = bookings.id_user
INNER JOIN speeches s
ON
s.id = bookings.id_speeche;