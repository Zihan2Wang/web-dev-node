const dao = require('./tweet-dao');

module.exports = (app) => {
  const findAllTweets = (req, res) => dao.findAllTweets().then(tweets => res.json(tweets));

  const postNewTweet = (req, res) => {
    const newTweet = {
      "topic": "Web Development",
      "userName": "ReactJS",
      "posted": Date.now(),
      "verified": false,
      "liked": false,
      "handle": "ReactJS",
      "time": "2h",
      "avatar-image": "../../../images/react-blue.png",
      "logo-image": "../../../images/react-blue.png",
      "stats": {
        "comments": 123,
        "retweets": 234,
        "likes": 345
      },
      ...req.body,
    }
    return dao.createTweet(newTweet).then(insertedTweet => res.send(insertedTweet))
  }

  const deleteTweet = (req, res) => {
    const id = req.params['id'];
    dao.deleteTweet(id).then(status => res.send(status))
  }

  const likeTweet = (req, res) => {
    const id = req.params['id'];
    // const tweet = dao.findTweetById(id).then(tweet => tweet ).then(tweet => tweet);
    return dao.findTweetById(id)
    .then(tweet => {
      if (tweet.liked === true) {
        tweet.stats.likes--;
        tweet.liked  = false;
        return dao.updateTweet(id, tweet)
          .then(status => res.sendStatus(200))
      } else {
        tweet.stats.likes++;
        console.log(tweet.liked)
        tweet.liked  = true;
        return dao.updateTweet(id, tweet)
          .then(status => res.sendStatus(200))
      }
    })
  }



  app.put('/api/v2/tweets/:id/like', likeTweet);
  app.delete('/api/v2/tweets/:id', deleteTweet);
  app.get('/api/v2/tweets', findAllTweets);
  app.post('/api/v2/tweets', postNewTweet);

}