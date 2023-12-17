const express = require("express");
const router = express.Router();
const { getListes, createListe, deleteListe } = require("../db/schemas/db");

router.get("", getListes);
router.put("", createListe);
router.delete("/:id", deleteListe);

module.exports = router;
