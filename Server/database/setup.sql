DROP TABLE IF EXISTS user_account;
DROP TABLE IF EXISTS diary;
DROP TABLE IF EXISTS token;

CREATE TABLE user_account (
  user_id INT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(30) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE diary (
  diary_id INT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(50) NOT NULL,
  content VARCHAR (255) NOT NULL,
  user_id INT NOT NULL,
  release DATE NOT NULL,
  PRIMARY KEY(diary_id),
  FOREIGN KEY (user_id) REFERENCES user_account(user_id)
);

CREATE TABLE token (
  token_id INT GENERATED ALWAYS AS IDENTITY,
  user_id INT NOT NULL,
  token CHAR(36) UNIQUE NOT NULL,
  PRIMARY KEY (token_id),
  FOREIGN KEY (user_id) REFERENCES user_account(user_id)
);