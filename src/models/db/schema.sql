DROP DATABASE IF EXISTS zezetweets;
CREATE DATABASE zezetweets;

\c zezetweets

DROP TABLE IF EXISTS tweets;
CREATE TABLE tweets(
  id SERIAL PRIMARY KEY,
  tweet VARCHAR(150)
);

INSERT INTO tweets(tweet)
VALUES('Yadadadamean tweet #1')
