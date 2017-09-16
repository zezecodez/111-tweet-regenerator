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

const addTweet = (id, tweet, created_at) => {
  db.any(
    `INSERT INTO tweets (id, tweet, created_at)
    VALUES ($1::text, $2::text, $3::Date)`, [id, tweet, created_at]
  )
}


// with unique ids may not even need this function
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
