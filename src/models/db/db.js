var pgp = require('pg-promise')();

var databaseName = 'zetweetbot';
var connectionString = process.env.DATABASE_URL || `postgres://${process.env.USER}@localhost:5432/${databaseName}`;
var db = pgp(connectionString)

const getAllTweets = () => {
  return db.any(`SELECT * FROM tweets ORDER BY id`);
};

const getTweet = () => {
  return db.one(`SELECT * FROM tweets`);
}

const addTweet = (tweet) => {
  db.any(
    `INSERT INTO tweets (tweet)
    VALUES ($1)`, [tweet]
  )
}

const deleteDuplicates = () => {
  db.any(`DELETE FROM tweets WHERE ctid NOT IN
(SELECT max(ctid) FROM tweets GROUP BY tweet)`)
}



module.exports = {
  getAllTweets,
  getTweet,
  addTweet,
  deleteDuplicates
}
