const Twit = require('twit')
const config = require('./config')
const bot = new Twit(config)

const favoriteTweet = () => {
  let params = {
    q: '#ethereum',
    result_type: 'recent',
    lang: 'en'
  }

  return bot.get('search/tweets', params, (err, data) => {
    const { statuses } = data
    const randomIndex = arr => {
      const index = Math.floor(Math.random() * arr.length)
      return arr[index]
    }
    const randomTweet = randomIndex(statuses)

    if (typeof randomTweet != 'undefined') {
      bot.post(
        'favorites/create',
        { id: randomTweet.id_str },
        (err, response) => {
          if (err) {
            console.log('CANNOT BE FAVORITE... Error')
          } else {
            console.log('FAVORITED... Success!!!')
          }
        }
      )
    }
  })
}

setInterval(favoriteTweet, 3000000)

module.exports = {
  favoriteTweet
}
