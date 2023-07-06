const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const roleValidations = [
  body("name").notEmpty().withMessage("El nombre del Role es obligatorio"),
];

const controller = require("../controllers/roleController");

router.get("/create", controller.create);
router.post("/", roleValidations, controller.store);

router.get("/", controller.index);
router.get("/:id", controller.show);

module.exports = router;
