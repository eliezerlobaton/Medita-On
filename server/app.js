const createError = require("http-errors"),
  express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan"),
  session = require("express-session");

// ARQUIVOS DE ROTAS - IMPORTAÇÃO
const indexRouter = require('./routes/index');
const adminRouter = require('./routes/admin');
  
// ARQUIVO MIDDLEWARE - IMPORTAÇÃO
const adminMiddleware = require("./middlewares/admin");
const authMiddleware = require("./middlewares/auth");
  
// APP
const app = express();

// VIEW ENGINE - A PASTA DAS VIEWS E A SINTAXE (EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({ secret: 'QWhNdWxla2U=', cookie: { maxAge: 60000 } }))

// PASTA PÚBLICA PARA ARQUIVOS ESTÁTICOS (IMG, JS, CSS...)
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);


app.use(adminMiddleware);

app.use("/admin", adminRouter);

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
