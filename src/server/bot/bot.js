const Twit = require('twit')
const config = require('./config')
// const router = require('express').Router()

const bot = new Twit(config)

bot.get('account/verify_credentials', { skip_status: true })
  .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    // `result` is an Object with keys "data" and "resp".
    // `data` and `resp` are the same objects as the ones passed
    // to the callback.
    // See https://github.com/ttezel/twit#tgetpath-params-callback
    // for details.

  })
bot.get('statuses/user_timeline', {q: 'hyphyhacker', trim_user: true})
  .then(data => printData(data))

function printData(data) {
  data.data.map((i) => {
    console.log(i.text)
  })
}

// bot.post('statuses/update', { status: 'hello world! testing my twit bot' })
//   .then(data => console.log(data))

//   // find a random tweet and 'favorite' it
// const favoriteTweet = () => {
//   let params = {
//       q: '#nodejs, #Nodejs',  // REQUIRED
//       result_type: 'recent',
//       lang: 'en'
//   }
//   // find the tweet
//   bot.get('search/tweets', params, (err,data) => {
//
//     // find tweets
//     const tweet = data.statuses
//     const randomIndex = (arr) => {
//       const index = Math.floor(Math.random() * arr.length)
//       return arr[index]
//     }
//     const randomTweet = randomIndex(tweet)   // pick a random tweet
//
//
//     // if random tweet exists
//     if (typeof randomTweet != 'undefined') {
//       // Tell TWITTER to 'favorite'
//       bot.post('favorites/create', { id: randomTweet.id_str }, (err, response) => {
//         // if there was an error while 'favorite'
//         if (err) {
//           console.log('CANNOT BE FAVORITE... Error')
//         } else {
//           console.log('FAVORITED... Success!!!')
//         }
//       })
//     }
//   })
// }
// // grab & 'favorite' as soon as program is running...
// favoriteTweet()
// // 'favorite' a tweet in every 30 minutes
// setInterval(favoriteTweet, 1800000)
//
// // function to generate a random tweet tweet
