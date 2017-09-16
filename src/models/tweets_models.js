const db = require('./db/db')

const getAllTweets = () => {
  return db.getAllTweets()
}

const getTweet = () => {
  return db.getTweet()
}

const addTweet = (id, tweet, created_at) => {
  db.addTweet(id, tweet, created_at)
}

const deleteDuplicates = () => {
  db.deleteDuplicates()
}

module.exports = {
  getAllTweets,
  getTweet,
  addTweet,
  deleteDuplicates
}
