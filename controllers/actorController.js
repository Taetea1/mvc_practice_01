const actorModel = require("../models/actorModel");

const getAllActor = (req, res) => {
  const actors = actorModel.getAllActors();
  res.render("actors/index", { actors });
};

const getManActor = (req, res) => {
  const manactors = actorModel.getMan();
  res.render("actors/man", { manactors });
};

module.exports = { getAllActor, getManActor };
