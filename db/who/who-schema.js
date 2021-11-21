const mongoose = require('mongoose');

const schema = mongoose.Schema({
  avatarIcon: String,
  username: String,
  handle: String
}, {collection: 'who'})

module.exports = schema;