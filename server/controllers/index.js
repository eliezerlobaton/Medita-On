const { events } = require('../data.js')

const controller = {
  
  index: (req, res) => {
    res.render('index', {
      events,
    });
  },
}



module.exports = controller
