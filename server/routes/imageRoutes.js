const router = require('express').Router();
const images = require('../controllers/imageController'),
    { checkAuth } = require('../middlewares');

// Get all of a user's images
router.get('/', checkAuth, (req, res) => {
    images.getFromUser(req, res);
});

// Create a new image
router.post('/', checkAuth, (req, res) => {
    images.add(req, res);
});

// Get a single image by ID
router.get('/:imageId', checkAuth, (req, res) => {
    images.getById(req, res);
});

// Delete a single image by ID
router.delete('/:imageId', checkAuth, (req, res) => {
    images.remove(req, res);
});

module.exports = router;
