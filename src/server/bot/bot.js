const Twit = require('twit')
const config = require('./config')
const bot = new Twit(config)

bot.get('account/verify_credentials', { skip_status: true })
  .catch(function(err) {
    console.log('caught error', err.stack)
  })
  .then(function(result) {})

const getTweetsFromAPI = () => {
  return bot.get('statuses/user_timeline', { q: 'hyphyhacker' })
}

module.exports = {
  getTweetsFromAPI
}
