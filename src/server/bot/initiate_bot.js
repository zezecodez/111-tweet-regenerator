const startFavorites = require('./bot').favoriteTweet()

// grab & 'favorite' as soon as program is running...
favoriteTweet()
// 'favorite' a tweet in every 30 minutes
setInterval(favoriteTweet, 1800000)
