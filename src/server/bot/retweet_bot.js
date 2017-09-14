const twit = require('twit')
const config = require('./config')

const bot = new twit(config)

// RETWEET BOT ==========================

// find latest tweet according the query 'q' in params
const autoRetweet = function() {
    const params = {
        q: '#graphql, #react',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }
    return bot.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
          // grab ID of tweet to retweet
            const retweetId = data.statuses[0].id_str
            // Tell TWITTER to retweet
            bot.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!')
                }
                // if there was an error while tweeting
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...')
                }
            })
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...')
        }
    })
}

// grab & retweet as soon as program is running...
autoRetweet()
// autoRetweet in every 50 minutes
setInterval(autoRetweet, 1500000)

module.exports = {
    autoRetweet
}
