const events = require('../data.js')

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

  show: (req, res, next) => {
    const { id } = req.params;
    let event = events.filter( event => event.id == id ); 
    
    try{
      res.status(200).json({
        result: 'succes',
        event,
        
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