const Image = require('../models/Image');

module.exports.getById = (req, res) => {
    const { imageId } = req.params;
    Image.findAll({
        where: {
            id: imageId,
        },
    })
        .then((images) => {
            return res.status(200).json(images);
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json({
                status: 'error',
                message: err,
            });
        });
};

module.exports.add = async (req, res) => {
    const testModel = require('../../tfjs-model');
    const result = await testModel(req.body.image);
    console.log(result);
    Image.create({
        image: req.body.image,
        userId: req.user.id,
        tumorPct: result * 100,
    })
        .then((image) => {
            return res.status(200).json({
                status: 'success',
                message: image,
            });
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json({
                status: 'error',
                message: err,
            });
        });
};

module.exports.getFromUser = (req, res) => {
    const { id } = req.user;
    Image.findAll({
        where: {
            userId: id,
        },
    })
        .then((images) => {
            images.forEach((image) => {
                image.image = image.image.toString();
            });
            return res.status(200).json(images);
        })
        .catch((err) => {
            return res.status(400).json({
                status: 'error',
                message: err,
            });
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
            return res.status(200).json(image);
        })
        .catch((err) => {
            return res.status(400).json({
                status: 'error',
                message: err,
            });
        });
};
