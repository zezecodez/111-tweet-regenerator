const router = require('express').Router()
const bot = require('../bot/bot')
const {
  addTweet,
  getAllTweets
} = require('../../models/tweets_models')

router.get('/', (req, res) => {
  res.status(200).render('index')
})

router.get('/api/tweets', (req, res) => {
  res.status(200).render('tweets')

  bot.getTweetsFromAPI()
    .then(tweetList => addTweetsToDb(tweetList))
})

router.get('/tweets', (req, res) => {
  getAllTweets().then(tweets =>{
    res.status(200).render('tweets', {tweets})
  })
  .catch(err => console.error(err))


})

module.exports = router

function addTweetsToDb(tweetList) {
  tweetList.data.map((i) => {
    console.log(i.id_str)
    addTweet(i.id_str, i.text)
  })
}

const printTweets = (tweetList) => {
  tweetList.data.map(() => {

  })
}
