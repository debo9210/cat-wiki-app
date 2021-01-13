const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CatWikiSchema = new Schema({
  name: {
    type: String,
  },
  searchNames: [],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = CatWiki = mongoose.model('catwiki', CatWikiSchema);
