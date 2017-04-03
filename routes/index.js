var express = require('express');
var twit = require('twit');
var config = require('../config.js')
var db = require('../db/db.js')

var router = express.Router();
var Twitter = new twit(config);
var totalTweets = [];

var params = {
  //screen_name: 'zezecodez',
  q: 'zezecodez',
  count: 15
}

function getAll() {
	db.getAllTweets().then(data => {
		for(var i = 0; i < data.length; i++) {
			totalTweets.push(data[i].tweet)
		}
		db.deleteDuplicates()
	})
}

function getOne() {
	getAll()
	const arrayLength = totalTweets.length
	const index = Math.floor((Math.random() * arrayLength) + 1);
	return totalTweets[index]
}

Twitter.get('search/tweets', params, getTweets)

function getTweets(err, data, response) {
	var tweets = data.statuses
	for(var i = 0; i < tweets.length; i++) {
		db.addTweet(tweets[i].text)
	}
}

	//TWEET OUT ONE RANDOM TWEET FROM DB
setInterval (tweetOut, 9000*600)

function tweetOut() {
	db.getAllTweets()
	.then(data => {
		for(var i = 0; i < data.length; i++) {
			totalTweets.push(data[i].tweet)
		}
		let arrayLength = totalTweets.length
		let index = Math.floor((Math.random() * arrayLength) + 1);
		console.log('index: ', index) //console.log here is intentionally left in!
		let tweet = {
			status: totalTweets[index]
		}

		Twitter.post('statuses/update', tweet, tweeted)

		function tweeted(err, data, respoonse) {
			if(err) {
				console.log('Something went wrong!', err)
			} else {
				console.log('It worked!')
			}
		}
	})
}

//ADD TWEETS TO DATABASE AS TWEETED
const stream = Twitter.stream('user')
stream.on('tweet', addToDb)

function addToDb(event) {
	if(event.user.screen_name === 'zezecodez') {
		const message = event.text
		db.addTweet(message)
		console.log('tweet added to db: ', message)
	}
	db.deleteDuplicates()
}

router.get('/', function(request, response, next) {
  db.getAllTweets()
  .then( data => {
    response.render('index', {
      title: 'zezetweets',
      tweet: data
    });
  })
});

module.exports = router;
