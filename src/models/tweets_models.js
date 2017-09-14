const db = require('db/db')

const getAllTweets = () => {
  return db.getAllTweets()
}

const getTweet = () => {
  return db.getTweet()
}

const addTweet = (tweet) => {
  db.addTweet(tweet)
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
