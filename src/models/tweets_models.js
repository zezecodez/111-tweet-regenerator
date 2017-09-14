const db = require('./db/db')

const getAllTweets = () => {
  return db.getAllTweets()
}

const getTweet = () => {
  return db.getTweet()
}

const addTweet = (id, tweet) => {
  db.addTweet(id, tweet)
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
