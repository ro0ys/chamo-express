const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ListeSchema = new Schema({
  id: ObjectId,
  nom: String,
  dateCreation: Date,
  recettes: Array(String)
});

const Liste = mongoose.model("liste", ListeSchema);
module.exports = Liste;
