const router = require('express').Router()
const bot = require('../bot/bot')
const { autoRetweet } = require('../bot/retweet_bot')
const { favoriteTweet } = require('../bot/favorite_bot')
const { postNewTweet } = require('../bot/post_tweet')
const { addTweet, getAllTweets } = require('../../models/tweets_models')

router.get('/', (req, res) => {
  res.status(200).render('index')
})

router.get('/api/tweets', (req, res) => {
  bot.getTweetsFromAPI()
    .then(tweetList => addTweetsToDb(tweetList))
    .then(() => res.status(200).redirect('/tweets'))
})

router.get('/tweets', (req, res) => {
  getAllTweets()
    .then(tweets => {
      res.status(200).render('tweets', { tweets })
    })
    .catch(err => console.error(err))
})

router.get('/bot/start', (req, res) => {
  favoriteTweet().then(() => {
    res.render('favorite')
  })
})

router.get('/bot/retweet', (req, res) => {
  autoRetweet().then(() => {
    res.render('retweeted')
  })
})

router.get('/bot/post', (req, res) => {
  res.render('post_tweet')
})

router.post('/bot/post', (req, res) => {
  const { tweet } = req.body
    // render same page, but with a status update after the post?
    // or render confirmation page?
    res.render('post_tweet')

    // after post db should be updated

})

module.exports = router

function addTweetsToDb(tweetList) {
  tweetList.data.map(i => {
    const dateString = i.created_at
    addTweet(i.id_str, i.text, i.created_at)
  })
}
