const Film = require('../schemas/filmSchema')

exports.deleteFilm = async (req, res) => {
    
    let film = await Film.findByIdAndDelete(req.params.id)
    if(!film) {
        return res.status(404).json({
                message: 'Kunde inte hitta den filmen'
            })
        }
    res.status(200).json(film)
}
exports.getFilmById = async (req, res) => {
    
    let film = await Film.findById(req.params.id)
        if(!film) {
            return res.status(404).json({
                message: 'Kunde inte hitta den filmen'
            })
        }
        res.status(200).json(film)
}
exports.getAllFilms = async (req, res) => {
        
        try {
            let films = await Film.find()
            res.status(200).json(films)
        } catch(err) {
            res.status(500).json({
                message: 'Nu blev det åt helvete'
            })
        } 
} 
exports.addFilmToDatabase = async (req, res) => {
        
        const { title, price, description, imgURL } = req.body;
        
        if(!title || !price || !description || !imgURL) {
            return res.status(400).json({ message: 'Du behöver fylla i all information'})
        }
        const film = await Film.create({ title, price, description, imgURL })
        
        if(!film) {
            return res.status(500).json({
                message: 'Något gick snett när du skulle lägga till filmen'
            })
        }
        res.status(201).json(film)
} 
exports.updateFilm = async (req, res) => {
        
        let film = await Film.findByIdAndUpdate(req.params.id, req.body, { new: true })
        
        if(!film) {
            return res.status(404).json({
                message: 'Något gick snett när du skulle uppdatera filmen'
            })
        }
        res.status(200).json(film)
}