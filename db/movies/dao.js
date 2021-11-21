const model = require('./model');

const findAllMovies = () => model.find();

const deleteMovie = (id) => model.deleteOne({_id: id})

const createMovie = (movie) =>
    model.create(movie);

const findMovieById = (id) => model.findById(id);

const updateMovie = (id, movie) =>
  model.updateOne({_id: id}, {$set: movie});



/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
module.exports = {
  findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie
};

