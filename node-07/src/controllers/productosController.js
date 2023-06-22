const { getProductos } = require("../models/Producto");
const { getProducto } = require("../services/productoService");

const index = async (req, res) => {
  const productos = await getProductos();
  res.json(productos);
};

const show = async (req, res) => {
  const producto = await getProducto(req.params);
  res.json(producto);
};

const create = (req, res) => {
  console.log(req.body);
  res.send("Producto creado: " + req.body.nombre);
};

const update = (req, res) => {
  console.log(req.body);
  res.send("Producto modificado: " + req.body.nombre);
};

module.exports = {
  index,
  show,
  create,
  update,
};
