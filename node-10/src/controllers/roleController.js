const service = require("../services/roleService");
const { validationResult } = require("express-validator");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.render("roles", { rows });
};

const show = async (req, res) => {
  const rows = await service.findOne(req.params);
  res.send(rows);
};

const create = (req, res) => {
  res.render("roles/create", { values: {} });
};

const store = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("roles/create", {
      values: req.body,
      errors: errors.array(),
    });
  }

  await service.store(req.body, req.file);

  res.redirect("/roles");
};

module.exports = {
  index,
  show,
  create,
  store,
};
