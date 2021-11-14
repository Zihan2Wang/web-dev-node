// import profile from "../../web-dev/src/reducers/profile";

let profile =
    {
      _id: '123',
      name: 'Thomas Hardy',
      firstName: 'Thomas',	lastName: 'Hardy',	handle: 'thomas',
      profilePicture: '../../../images/user1.jpeg', 	bannerPicture: '../../../images/banner2.jpeg',
      bio: 'Novelist. Poet.',
      location: 'Seattle, WA',	dateOfBirth: '1992-11-06',	dateJoined: '2010-04-08',
      website: 'www.youtube.com',
      followingCount: 312,	followersCount: 180, tweetsCount: 5196,
    }

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
       res.json(profile);
    }

    const updateCurrentProfile = (req, res) => {
      const newProfile = {
        _id: '123',
        handle: 'thomas',
        profilePicture: '../../../images/user1.jpeg', 	bannerPicture: '../../../images/banner2.jpeg',
        dateJoined: '2010-04-08',
        followingCount: 312,	followersCount: 180, tweetsCount: 5196,
        ...req.body,
      };
      profile = newProfile;
      res.sendStatus(200);
    }
    app.get('/api/profile', getCurrentProfile)
    app.put('/api/profile/:id', updateCurrentProfile)
}