const mysecret = process.env.JWT_SECRET ;
const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken: (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(403).send({message: 'No token provided.' });
        }
        jwt.verify(token, mysecret, (err, decoded) => {
            if (err) {
                return res.status(500).send({message: 'Failed to authenticate token.' });
            }
            req.userId = decoded.id;
            req.type = decoded.type;
            next();
        });
    }
}
