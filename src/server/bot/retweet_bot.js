const twit = require('twit')
const config = require('./config')

const bot = new twit(config)

const autoRetweet = function() {
    const params = {
        q: '#reactnative',  // REQUIRED
        result_type: 'recent',
        lang: 'en'
    }
    return bot.get('search/tweets', params, function(err, data) {
        if (!err) {
            const retweetId = data.statuses[0].id_str
            bot.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted!!!')
                }
                if (err) {
                    console.log('Something went wrong while RETWEETING... Duplication maybe...')
                }
            })
        }
        else {
          console.log('Something went wrong while SEARCHING...')
        }
    })
}

setInterval(autoRetweet, 3000000)

module.exports = {
    autoRetweet
}
