const actorModel = require("../models/actorModel");

const getAllActor = (req, res) => {
  const actors = actorModel.getAllActors();
  res.render("actors/index", { actors });
};

const getManActor = (req, res) => {
  const manactors = actorModel.getMan();
  res.render("actors/man", { manactors });
};

const getWomanActor = (req, res) => {
  const womanactors = actorModel.getWoman();
  res.render("actors/woman", { womanactors });
};

const getSameActor = (req, res) => {
  const sameactors = actorModel.getSameActors();
  res.render("actors/sameactor", { sameactors });
};

const getMovieActor = (req, res) => {
  const movieactors = actorModel.getMovie();
  res.render("actors/movieactor", { movieactors });
};

const getDramaActor = (req, res) => {
  const dramaactors = actorModel.getDrama();
  res.render("actors/dramaactor", { dramaactors });
};

module.exports = {
  getAllActor,
  getManActor,
  getWomanActor,
  getSameActor,
  getMovieActor,
  getDramaActor,
};
