const createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  session = require('express-session')

// ARQUIVOS DE ROTAS - IMPORTAÇÃO
const indexRouter = require('./routes/index'),
  usersRouter = require('./routes/users'),
  acessoRouter = require('./routes/acesso'),
  adminRouter = require('./routes/admin')

// ARQUIVO MIDDLEWARE - IMPORTAÇÃO
const adminMiddleware = require('./middlewares/admin')

// APP
const app = express()

// VIEW ENGINE - A PASTA DAS VIEWS E A SINTAXE (EJS)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// COOKIES E SESSION (PARSE E DEFINIÇÃO DA SESSION COM SEGREDO E TEMPO PARA EXPIRAÇÃO)
app.use(cookieParser())
app.use(session({ secret: 'QWhNdWxla2U=', cookie: { maxAge: 60000 } }))

// PASTA PÚBLICA PARA ARQUIVOS ESTÁTICOS (IMG, JS, CSS...)
app.use(express.static(path.join(__dirname, 'public')))

// ARQUIVOS DE ROTAS SENDO CHAMADOS PARA CADA INÍCIO DE ROTA
app.use('/acesso', acessoRouter) // Acessos como Login, Logout e Cadastro
app.use('/usuarios', usersRouter)
app.use('/', indexRouter)

// A PARTIR DAQUI SOMENTE USUÁRIOS ADMNISTRADORES PODEM ACESSAR
app.use(adminMiddleware)

// ROTAS ADMINISTRATIVAS
app.use('/admin', adminRouter)

// CAPTURA DO 404 E SEQUÊNCIA AO TRATAMENTO DO ERRO
app.use(function (req, res, next) {
  next(createError(404))
})

// MANIPULAÇÃO DE ERRO
app.use(function (err, req, res, next) {
  // DEFINE LOCALS, EXIBINDO ERROS APENAS EM AMBIENTE DE DESENVOLVIMENTO
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // RENDERIZANDO A VIEW DE ERROS
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
