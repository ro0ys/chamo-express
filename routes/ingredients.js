const express = require("express");
const router = express.Router();
const {
  getIngredients,
  updateIngredient,
  createIngredient,
  deleteIngredient,
} = require("../db/schemas/db");

router.get("", getIngredients);

router.put("", createIngredient);

router.post("/:id", updateIngredient);

router.delete("/:id", deleteIngredient);

module.exports = router;
