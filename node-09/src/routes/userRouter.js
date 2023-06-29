const express = require("express");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});

const uploadFile = multer({ storage });

const { body } = require("express-validator");
const validateInput = require("../middlewares/validator");

const userValidations = [
  body("email")
    .isEmail()
    .withMessage("Ingrese una dirección de correo electrónico válida"),
  body("password")
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage("La contraseña debe tener ..."),
  // .isLength({ min: 6 })
  // .withMessage("La contraseña debe tener al menos 6 caracteres"),
];

const controller = require("../controllers/userController");

router.get("/create", controller.create);
router.post(
  "/",
  userValidations,
  validateInput,
  uploadFile.single("image"),
  controller.store
);

router.get("/", controller.index);
router.get("/:id", controller.show);

module.exports = router;
