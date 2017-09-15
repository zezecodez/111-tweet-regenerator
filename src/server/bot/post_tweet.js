const twit = require('twit')
const config = require('./config')

const bot = new twit(config)


const postNewTweet = () => {
  const tweet = {
    status: tweetTxt
  }
  bot.post('statuses/update', tweet, (err, data, response) => {
    if (err) {
      console.log('Error in posting')
    }
    console.log('we posted!!! ::::')
  })
}
console.log(postNewTweet)

module.exports = postNewTweet
