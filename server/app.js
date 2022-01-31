const createError = require("http-errors"),
  express = require("express"),
  bodyParser = require('body-parser'),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan")

const app = express();

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// ARQUIVOS DE ROTAS - IMPORTAÇÃO
const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')

// ARQUIVO MIDDLEWARE - IMPORTAÇÃO
// const adminMiddleware = require("./middlewares/admin");

// APP

// PASTA PÚBLICA PARA ARQUIVOS ESTÁTICOS (IMG, JS, CSS...)
app.use(express.static(path.join(__dirname, "public")));
// VIEW ENGINE - A PASTA DAS VIEWS E A SINTAXE (EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/', indexRouter)

// app.use(adminMiddleware)

app.use("/admin", adminRouter)

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});



module.exports = app;
