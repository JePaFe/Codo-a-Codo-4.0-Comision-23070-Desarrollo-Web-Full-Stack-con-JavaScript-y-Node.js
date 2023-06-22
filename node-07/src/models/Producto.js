const { conn } = require("../config/conn");

const getProductos = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM productos");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const getProducto = async (params) => {
  const { id } = params;
  try {
    // console.log("SELECT * FROM productos WHERE id = ?", [ id ]);
    const [rows] = await conn.query("SELECT * FROM productos WHERE ?", { id });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

module.exports = {
  getProducto,
  getProductos,
};
