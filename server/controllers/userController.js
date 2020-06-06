const User = require('../models/User');

module.exports.getUsers = (req, res) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            console.log(err);
        });
}
