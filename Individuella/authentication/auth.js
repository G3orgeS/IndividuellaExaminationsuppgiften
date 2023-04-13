const jwt = require('jsonwebtoken');
require('dotenv').config();
// const admin = require('../schemas/adminSchema');
const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
    return jwt.sign({ _id: user._id }, secretKey, { expiresIn: '1h' })
}

exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        req.userId = jwt.verify(token, secretKey)._id;
        next()
    } catch {
        return res.status(401).json({
            message: 'logga in först!'
        })
    }
}






// exports.logedIn = async (req, res, next) => {

//     const admin = await Admin.findOne({ adminId: req.userId })

//     if(!admin){
//         return res.status(401).json({
//             message: 'Du behöver vara admin först'
//         })
//     }
//     next()
// }

// exports.verifyUser = async (req, res, next) => {

//     if(req.userId !== req.params.id){
//         return res.status(401).json({
//             message: 'Det tillhör en annan användare.'
//         })
//     }
//     next()
// }