const router = require('express').Router()
const bot = require('../bot/bot')
const {addTweet, deleteDuplicates} = require('../../models/tweets_models')

router.get('/', (req, res) => {
  res.status(200).render('index')
})

router.get('/tweets', (req, res) => {
  res.status(200).render('tweets')
  bot.getTweetsFromAPI()
    .then(tweetList => addTweetsToDb(tweetList))
    .then(deleteDuplicates)
})

module.exports = router

function addTweetsToDb(tweetList) {
  tweetList.data.map((i) => {
    console.log(i.id_str)
    addTweet(i.id_str, i.text)
  })
}

const addToDb = () => {

}
