const events = require("../data.json");

const controller = {
  index: (req, res, next) => {
    try {
      res.render("eventosdivididos", { 
        eventos: events,
        usuarioLogado: req.cookies.usuario
      });
    } catch (err) {
      res.status(400).json({
        result: "error",
        err,
      });
    }
  },

  show: async (req, res, next) => {
    const { id } = req.params;

    const event = events[id - 1];

    try {
      res.render("eventDetails", {
        event,
        usuarioLogado: req.cookies.usuario
      });
    } catch (err) {
      res.status(400).json({
        result: "error",
        err,
      });
    }
  },
};

module.exports = controller;
