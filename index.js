const router = require('express').Router();

const artist = require('./controllers/artistController');

router.route('/artists').get(artist.getAllArtists).post(artist.createArtist);

router
  .route('/artists/:name')
  .get(artist.getArtist)
  .put(artist.updateArtist)
  .delete(artist.deleteArtist);

router.route('/artistNames').get(artist.getAllArtistNames);

module.exports = router;
