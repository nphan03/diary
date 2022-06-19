CREATE DATABASE diaries;
CREATE EXTENSION pgcrypto;

CREATE TABLE alicephan_diary (
  diary_id SERIAL PRIMARY KEY,
  diary_owner_username VARCHAR(100) NOT NULL,
  diary_owner_password TEXT NOT NULL,
  diary_list  JSONB[]
);

