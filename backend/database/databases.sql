CREATE DATABASE diary_web
CREATE EXTENSION pgcrypto

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL,
  user_password TEXT NOT NULL,
  user_diaries  TEXT NOT NULL
);

CREATE TABLE alice_diaries (
  diary_id SERIAL PRIMARY KEY,
  diary_owner INT,
  diary_date DATE NOT NULL,
  diary_text TEXT,
  FOREIGN KEY (owner) REFERENCES users(user_id) ON DELETE CASCADE
);