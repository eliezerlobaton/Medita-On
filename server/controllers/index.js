const{Users} = require('../models')
const controller = {
  index: (req, res, next) => {
    res.render('index');
  },
  register:async (req, res, next) => {
  const{ frist_name, phone, birth, last_name, email, password} = req.body;
let newUsers = Users.create({frist_name, last_name,birth,email,password})
    res.status(200).json({
      frist_name, phone , birth

    })
  }
}



module.exports = controller
