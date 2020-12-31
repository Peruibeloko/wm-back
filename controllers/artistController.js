const Artist = require('../models/artistModel');

module.exports.getArtist = (req, res) => {
  Artist.findOne(
    {
      name: req.params.name
    },
    (err, artist) => {
      if (err) {
        res.send(err);
      }
      res.json(artist);
    }
  );
};

module.exports.getAllArtists = (req, res) => {
  Artist.find({}, (err, artists) => {
    if (err) {
      res.send(err);
    }
    res.json(artists);
  });
};

module.exports.createArtist = (req, res) => {
  const newArtist = new Artist(req.body);
  newArtist.save((err, artist) => {
    if (err) {
      res.send(err);
    }
    res.json(artist);
  });
};

module.exports.updateArtist = (req, res) => {
  Artist.updateOne(
    {
      name: req.params.name
    },
    req.body,
    (err, artist) => {
      if (err) {
        res.send(err);
      }
      res.json(artist);
    }
  );
};

module.exports.deleteArtist = (req, res) => {
  Artist.deleteOne(
    {
      name: req.params.name
    },
    err => {
      if (err) {
        res.send(err);
      }

      res.json({
        message: `Artist ${req.params.name} successfully deleted`
      });
    }
  );
};

module.exports.getAllArtistNames = (req, res) => {
  Artist.find({}, (err, artists) => {
    if (err) res.send(err);
    else res.json(artists.map(a => a.name));
  });
};
