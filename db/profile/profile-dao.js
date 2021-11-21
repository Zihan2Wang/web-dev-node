const model = require('./profile-model');

const findAllProfile = () => model.find();

const updateProfile = (id, profile) => {
  console.log(profile)
  return model.updateOne({_id: id}, {$set: profile});}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
module.exports = {findAllProfile, updateProfile}