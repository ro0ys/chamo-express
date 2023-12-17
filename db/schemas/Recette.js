const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecetteSchema = new Schema({
  nom: String,
  ingredients: [{ type: Schema.ObjectId, ref: "ingredient" }],
});

const Recette = mongoose.model("recettes", RecetteSchema);
module.exports = Recette;
