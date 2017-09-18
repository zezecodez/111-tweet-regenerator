const Twit = require('twit')
const config = require('./config')
const bot = new Twit(config)

console.log('outide function =========')

const postNewTweet = (tweetTxt) => {
  console.log('yolo inside the postNewTweet', tweetTxt)
  const tweet = {
    status: tweetTxt
  }
  console.log('IS THIS PRINTING?!?!!?!! inside function::: ')
  bot.post('statuses/update', tweet, (err, data, response) => {
    if (!err) {
      console.log('we posted!!! ::::', data)
    } else {
      console.log('Error in posting')
    }
  })
}
// console.log(postNewTweet)

module.exports = {
  postNewTweet
}
