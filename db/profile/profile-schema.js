const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  handle: String,
  profilePicture: String,
  bannerPicture: String,
  bio: String,
  location:String,
  dateOfBirth: String,
  dateJoined: String,
  website: String,
  followingCount: Number,
  followersCount: Number,
  tweetsCount: Number
    }, {collection: 'profiles'}

)

module.exports = schema;