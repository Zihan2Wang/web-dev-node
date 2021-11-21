
const dao = require('./profile-dao');

module.exports = (app) => {
  const getCurrentProfile = (req, res) =>
    dao.findAllProfile().then(profile => res.json(profile));

  const updateCurrentProfile = (req, res) => {
    const id = req.params.id;
    const newProfile = {
      handle: 'thomas',
      profilePicture: '../../../images/user1.jpeg', 	bannerPicture: '../../../images/banner2.jpeg',
      dateJoined: '2010-04-08',
      followingCount: 312,	followersCount: 180, tweetsCount: 5196,
      ...req.body,
    };
    dao.updateProfile(id, newProfile).then(status => res.sendStatus(200));
  }
  app.get('/api/v2/profile', getCurrentProfile)
  app.put('/api/v2/profile/:id', updateCurrentProfile)
}