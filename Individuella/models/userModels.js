const User = require('../schemas/userSchema')
const auth = require('../authentication/auth')
const bcrypt = require('bcryptjs')

exports.addUser = async (req, res) => {
    
    const { firstName, lastName, email, password } = req.body;
    
    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({
            message: 'Du behöver förnamn, efternamn, email och lösenord'
        })
    }

    const salt = await bcrypt.genSalt(15)
    const hash = await bcrypt.hash(password, salt)
    const _user = new User({ firstName, lastName, email, password: hash })
    const user = await _user.save()

    res.status(201).json(auth.generateToken(user))
}
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password ) {
        return res.status(400).json({
            message: 'Du behöver email och lösenord'
        })
    }
    const user = await User.findOne({ email })

    
    if(!user) {
        return res.status(401).json({
            message: 'u sure?'
        })
    }

    const result = await bcrypt.compare(password, user.password)

    if(!result) {
        return res.status(401).json({
            message: 'u sure?'
        })
    }

    res.status(200).json(auth.generateToken(user))
}
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ user: req.userData })
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({
            message: 'Kunde inte hämta users',
            error: error.message
        })
    }
}