const producto = require("../models/Producto");

const getProducto = async (params) => {
  const item = await producto.getProducto(params);

//   console.log(item);
  if (item.length > 0) {
    return item[0];
  }

  return "No existe el producto";
};

module.exports = {
  getProducto,
};
