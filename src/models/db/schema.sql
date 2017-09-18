DROP TABLE IF EXISTS tweets;
CREATE TABLE tweets(
  id VARCHAR(150) PRIMARY KEY,
  tweet VARCHAR(150),
  created_at DATE
);
