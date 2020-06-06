const Image = require('../models/Image');

module.exports.getAll = (req, res) => {
    Image.findAll()
        .then((images) => {
            res.status(200).json(images);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
};

module.exports.getFromUser = (req, res) => {
    Image.findAll({
        where: {
            userId: req.params.userId,
        },
    })
        .then((images) => {
            res.status(200).json(images);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
};
