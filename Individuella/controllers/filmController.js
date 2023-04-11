const router = require('express').Router();
const { addFilmToDatabase, getAllFilms, deleteFilm, getFilmById, updateFilm } = require('../models/filmModels');
// const { verifyToken, checkAdmin } = require('../authentication/auth')

router.post('/', addFilmToDatabase);
router.get('/', getAllFilms);
router.delete('/:id', deleteFilm);
router.put('/:id', updateFilm);
router.get('/:id', getFilmById);

module.exports = router; 