const Ingredient = require("./Ingredient.js");
const Recette = require("./Recette.js");
const Liste = require("./Liste.js");
const url = require("url");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const getIngredients = (req, res) => {
  const page = url.parse(req.url, true).query.page;
  Ingredient.find({})
    //.skip((page - 1) * 10)
    //.limit(10)
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getIngredient = (req, res) => {
  Ingredient.findOne({ _id: req.params.id })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Ingredient not found" }));
};

const createIngredient = (req, res) => {
  const { id, ...ingredient } = req.body;
  console.log("createIngredient", ingredient);
  Ingredient.create(ingredient)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const updateIngredient = (req, res) => {
  const { id, __v, ...ingredient } = req.body;
  console.log("updateIngredient", ingredient);
  Ingredient.findOneAndUpdate({ _id: req.params.id }, ingredient, {
    new: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Ingredient not found" }));
};

const deleteIngredient = (req, res) => {
  Ingredient.findOneAndDelete({ _id: req.params.id })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Ingredient not found" }));
};

const getRecettes = (_req, res) => {
  Recette.find()
    //.populate("ingredients")
    .then((resultat) => {
      console.log("resultat", resultat);
      return res.status(200).json(resultat);
    })
    .catch((error) => res.status(500).json({ msg: error }));
};

const getRecette = (req, res) => {
  Recette.findOne({ _id: req.params.id })
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(404).json({ msg: "Recette not found" }));
};

const createRecette = (req, res) => {
  const { id, ...recette } = req.body;
  const newRecette = new Recette();
  newRecette.nom = recette.nom;
  newRecette.ingredients = recette.ingredients.map((i) => new ObjectId(i));
  // console.log("newRecette", newRecette);
  newRecette.save();
  //  .then((result) => {
  //    console.log("rez", result);
  //    res.status(200).json({ result });
  //  })
  //  .catch((error) => res.status(500).json({ msg: error }));
};

const updateRecette = (req, res) => {
  const { __v, ...ingredient } = req.body;
  console.log("updateRecette", ingredient);
  Recette.findOneAndUpdate({ _id: req.params.id }, ingredient, {
    new: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Recette not found" }));
};

const deleteRecette = (req, res) => {
  Recette.findOneAndDelete({ _id: req.params.id })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Recette not found" }));
};

const getListes = (_req, res) => {
  Liste.find({})
    .then((result) => res.status(200).json(result))
    .catch((error) => res.status(500).json({ msg: error }));
};

const createListe = (req, res) => {
  const { id, ...liste } = req.body;
  console.log("createListe", liste);
  Liste.create(liste)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const deleteListe = (req, res) => {
  Liste.findOneAndDelete({ _id: req.params.id })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Ingredient not found" }));
};

module.exports = {
  getIngredients,
  getIngredient,
  createIngredient,
  updateIngredient,
  deleteIngredient,
  getRecettes,
  getRecette,
  createRecette,
  updateRecette,
  deleteRecette,
  getListes,
  createListe,
  deleteListe,
};
