const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const IngredientSchema = new Schema({
  _id: ObjectId,
  nom: String,
  unite: String,
  type: String,
});

const Ingredient = mongoose.model("ingredient", IngredientSchema);
module.exports = Ingredient;
