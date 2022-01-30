
const controller = {
  index: (req, res, next) => {
    res.render('users');
  },
  show: (req, res, next) => {
    const { id } = req.params
    res.render('user');
  },
  list: (req, res, next) => {
    let admin = req.cookies.admin
    if (!admin || admin === 'false') {
      res.render('users');
    } else {
      res.render('usersList');
    }
  }
}

module.exports = controller
