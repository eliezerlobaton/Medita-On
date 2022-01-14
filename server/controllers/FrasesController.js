const { Phrases } = require('../models');

const controller = {

  index: async(req, res) => {

    try{
      const phrasesList = await Phrases.findAll();

      res.status(200).json({
        result: phrasesList,
      });
    }catch(error) {
      res.status(400).json({
        error,
      });
    }
    // res.render('index');
  },

  show: async(req, res) => {
    const { id } = req.params

    try{
        const frase = await Phrases.findOne({where:{ id } });

        if(!frase) {
          res.status(200).json({
            result: "success",
            message: "Não existe frase."
          });
        }

        res.status(200).json({
          result: "success",
          frase,
        });
    }catch(error) {
      res.status(400).json({
        error,
      });
    }
    // res.render('index');
  },

  create: async (req, res, next) => {
    const {
      phrase,
      author
    } = req.body;

    try{
      let NewPhrase = await Phrases.create({
        phrase,
        author,
        creation_date: new Date()
      });

      res.status(200).json({
        result: "success",
        message: "Frase cadastrada com sucesso!",
        NewPhrase
      });

    }catch(error) {
      res.status(400).json({
        result: error,
        message: "Não foi possível cadastrar a frase."
      });
    }
    // res.render('index');
  },

  update: async(req, res, next) => {
    const { id } = req.params;
    const {
      phrase,
      author
    } = req.body;

   try{
    const frase = await Phrases.update({
      phrase,
      author
    }, { where: { id } });

    res.status(200).json({
      result: "success",
      message: "Frase editada com sucesso!",
    });
   }catch(error) {
    res.status(400).json({
      result: error,
      message: "Não foi possível editar essa frase."
    });
  }
    // res.render('index');
  },

  delete: async(req, res, next) => {
    const { id } = req.params

    try{
      const frase = await Phrases.destroy({ where: { id } });

      res.status(200).json({
        result: "success",
        message: "Frase excluída com sucesso!"
      });
    }catch{
      res.status(400).json({
        result: "error",
        message: "Não foi possível excluir essa frase."
      });
    }
    // res.render('index');
  }

}

module.exports = controller