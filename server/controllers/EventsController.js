const events = require('../data.json')

const controller = {

  index: (req, res, next) => {
    try{
      res.status(200).json({
        result: 'succes',
        events,
      })
    }catch(err){
      res.status(400).json({
        result: 'error',
        err,
      })
    }
  },

  show: async (req, res, next) => {

    const { id } = req.params;

    const event = events[id - 1]
    
    try{

      res.render('eventDetails', {

        event

      })

    } catch(err){
      res.status(400).json({
        result: 'error',
        err,
      })
    }
  }
}

module.exports = controller