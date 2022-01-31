const createError = require("http-errors"),
  express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan");


// ARQUIVOS DE ROTAS - IMPORTAÇÃO
const indexRouter = require('./routes/index'),
  usersRouter = require('./routes/users'),
  adminRouter = require('./routes/admin'),
  registrerRouter = require('./routes/register'),
  loginRouter = require('./routes/login')

// ARQUIVO MIDDLEWARE - IMPORTAÇÃO
const adminMiddleware = require("./middlewares/admin");

// APP
const app = express();

// PASTA PÚBLICA PARA ARQUIVOS ESTÁTICOS (IMG, JS, CSS...)
app.use(express.static(path.join(__dirname, "public")));
// VIEW ENGINE - A PASTA DAS VIEWS E A SINTAXE (EJS)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use('/user', usersRouter)
app.use('/', indexRouter)
app.use('/cadastro', registrerRouter)
app.use('/login', loginRouter)

// COOKIES E SESSION (PARSE E DEFINIcaO DA SESSION COM SEGREDO E TEMPO PARA EXPIRAcaO)
app.use(cookieParser());


app.use("/user", usersRouter);
app.use("/", indexRouter);
app.use("/acesso", acessoRouter);

app.use(adminMiddleware)

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
