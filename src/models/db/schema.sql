DROP TABLE IF EXISTS tweets;
CREATE TABLE tweets(
  id VARCHAR(150) PRIMARY KEY,
  tweet VARCHAR(150),
  created_at DATE
);

INSERT INTO tweets(id, tweet, created_at)
VALUES('asdsadas112', 'Yadadadamean tweet #1', 'Thu Apr 06 15:28:43 +0000 2017')
