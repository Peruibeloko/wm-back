import mongoose, { Schema } from 'mongoose';

const Artist = new Schema({
  name: {
    type: String,
    required: 'Nome do membro'
  },
  genres: {
    type: [String],
    required: 'Gêneros que produz, sem repetir'
  },
  description: {
    type: String,
    required: 'Descrição do artista'
  },
  networks: {
    spotify: {
      type: String
    },
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    soundcloud: {
      type: String
    },
    youtube: {
      type: String
    }
  }
});

export default mongoose.model('Artist', Artist);
