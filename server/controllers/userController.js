const User = require('../models/User');

module.exports.getById = (req, res) => {
    const { id } = req.user;
    User.findOne({ where: { id } })
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        });
};
