require("dotenv").config();
const express = require("express");
const app = express();

const session = require("cookie-session");

app.use(
  session({
    keys: ["S3cr3t01", "S3cr3t02"],
  })
);

const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(expressLayouts);
app.set("layout", "./layouts/public");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

const isLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }

  next();
};

app.get("/", (req, res) => {
  res.render("index", { texto: "Hola EJS" });
});

app.use("/", require("./src/routes/authRouter"));

app.use("/users", isLogin, require("./src/routes/userRouter"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
