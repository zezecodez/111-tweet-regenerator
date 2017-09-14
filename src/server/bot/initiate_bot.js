const Twit = require('twit')
const config = require('./config')
const bot = new Twit(config)

const favoriteTweet = () => {
  let params = {
      q: '#graphql, #react ',  // REQUIRED
      result_type: 'recent',
      lang: 'en'
  }

  return bot.get('search/tweets', params, (err,data) => {
    const tweet = data.statuses
    const randomIndex = (arr) => {
      const index = Math.floor(Math.random() * arr.length)
      return arr[index]
    }
    const randomTweet = randomIndex(tweet)   // pick a random tweet


    // if random tweet exists
    if (typeof randomTweet != 'undefined') {
      // Tell TWITTER to 'favorite'
      bot.post('favorites/create', { id: randomTweet.id_str }, (err, response) => {
        // if there was an error while 'favorite'
        if (err) {
          console.log('CANNOT BE FAVORITE... Error')
        } else {
          console.log('FAVORITED... Success!!!')
        }
      })
    }
  })
}

// grab & 'favorite' as soon as program is running...
favoriteTweet()
// 'favorite' a tweet in every 30 minutes
setInterval(favoriteTweet, 1500000)

module.exports = {
  favoriteTweet
}
