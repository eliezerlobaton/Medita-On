const { events } = require('../data.json')

const controller = {
  
  index: (req, res) => {
    res.render('index', {
      events,
    });
  },
}



module.exports = controller
