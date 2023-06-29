const { conn } = require("../config/conn");

const findAll = async () => {
  try {
    const [rows] = await conn.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const findOne = async (params) => {
  const { id } = params;
  try {
    // console.log(await conn.query("SELECT * FROM users WHERE ?", { id }));
    const [rows] = await conn.query("SELECT * FROM users WHERE ?", { id });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conn.releaseConnection();
  }
};

const store = async (body, file) => {
  // console.log(file);
  let image = null;
  
  if (file) {
    image = file.filename;
  }
  const { email, password } = body;
  try {
    const [rows] = await conn.query("INSERT INTO users SET ?", {
      email,
      password,
      image,
    });
    return rows;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return "Registro duplicado";
    }

    throw error;
  } finally {
    conn.releaseConnection();
  }
};

module.exports = {
  findAll,
  findOne,
  store,
};
