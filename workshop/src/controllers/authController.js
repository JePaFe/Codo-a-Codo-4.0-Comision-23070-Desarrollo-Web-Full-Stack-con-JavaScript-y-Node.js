const { conn } = require("../config/conn");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const service = require("../services/userService");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const register = (req, res) => {
  return res.render("auth/register", {
    values: {},
    layout: "layouts/auth",
  });
};

const postRegister = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("auth/register", {
      values: req.body,
      errors: errors.array(),
      layout: "layouts/auth",
    });
  }

  const result = await service.store(req.body);

  await service.setRole({
    user_id: result.insertId,
    role_id: 68, // Role User
  });

  res.redirect("/");
};

const login = (req, res) => {
  res.render("auth/login", { values: {}, layout: "layouts/auth" });
};

const postLogin = async (req, res) => {
  const [rows] = await conn.query("SELECT * FROM users WHERE email = ?", [
    req.body.email,
  ]);

  if (rows.length == 0) {
    res.render("auth/login", {
      values: req.body,
      errors: [{ msg: "El correo y/o contraseña son incorrectos" }],
      layout: "layouts/auth",
    });
  } else if (!(await bcryptjs.compare(req.body.password, rows[0].password))) {
    res.render("auth/login", {
      values: req.body,
      errors: [{ msg: "El correo y/o contraseña son incorrectos" }],
      layout: "layouts/auth",
    });
  } else {
    req.session.user_id = rows[0].id;

    const role = await service.hasRole({ user_id: rows[0].id, role_id: 69 }); // Role Admin

    if (role.length > 0) {
      return res.redirect("/admin");
    }

    res.redirect("/");
  }
};

const forgot = (req, res) => {
  return res.render("auth/forgot", {
    values: {},
    layout: "layouts/auth",
  });
};

const postForgot = async (req, res) => {
  const [rows] = await conn.query(
    "SELECT id, email FROM users WHERE email = ?",
    [req.body.email]
  );

  if (rows.length == 0) {
    res.render("auth/forgot", {
      values: req.body,
      errors: [{ msg: "El correo es incorrectos" }],
      layout: "layouts/auth",
    });
  } else {
    const secret = process.env.CAC_SECRET + rows[0].email;

    const token = jwt.sign({ uid: rows[0].id }, secret, {
      expiresIn: "15m",
    });

    const PORT = process.env.PORT || 3000;

    const link = `http://localhost:${PORT}/reset/${rows[0].id}/${token}`;

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ead4f8226e1a59",
        pass: "cbb243c4aee7c5",
      },
    });

    let emailOptions = {
      from: "forgot@x.com",
      to: rows[0].email,
      subject: "Forgot password",
      html: `
        <h1>Forgot password</h1>
        <a href="${link}">Reset password</a>
      `,
    };

    transport.sendMail(emailOptions, (err, data) => {
      if (err) {
        return res.status(500).json({ err });
      }

      return res.json({
        user: rows[0],
        link,
      });
    });
  }
};

const reset = async (req, res) => {
  const row = await service.findOne(req.params);

  return res.render("auth/reset", {
    values: { id: row.id, token: req.params.token },
    layout: "layouts/auth",
  });
};

const postReset = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("auth/reset", {
      values: req.body,
      errors: errors.array(),
      layout: "layouts/auth",
    });
  }

  try {
    const user = await service.findOne(req.body);

    const secret = process.env.CAC_SECRET + user.email;

    const verified = jwt.verify(req.body.token, secret);

    if (verified) {
      req.body.email = user.email;
      await service.update(req.body);
    }

    res.json({
      user,
      verified,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = {
  register,
  postRegister,
  login,
  postLogin,
  forgot,
  postForgot,
  reset,
  postReset,
};
