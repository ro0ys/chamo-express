const express = require("express");
const router = express.Router();
const {
  getRecettes,
  getRecette,
  updateRecette,
  createRecette,
  deleteRecette,
} = require("../db/schemas/db");

router.get("", getRecettes);

router.get("/:id", getRecette);

router.put("", createRecette);

router.post("/:id", updateRecette);

router.delete("/:id", deleteRecette);

module.exports = router;
