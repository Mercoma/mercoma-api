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

module.exports.getById = (req, res) => {
    const { imageId } = req.params;
    Image.findOne({
        where: {
            id: imageId,
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

module.exports.add = (req, res) => {
    const { userId } = req.user;
    Image.create({})
        .then((image) => {})
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
};

module.exports.getFromUser = (req, res) => {
    const { userId } = req.user;
    Image.findAll({
        where: {
            userId: userId,
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

module.exports.remove = (req, res) => {
    const { imageId } = req.params;
    Image.destroy({
        where: {
            id: imageId,
        },
        limit: 1,
    })
        .then((image) => {
            res.status(200);
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        });
};
