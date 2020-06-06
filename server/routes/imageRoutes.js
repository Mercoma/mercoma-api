const router = require('express').Router();
const images = require('../controllers/imageController');

// Get all of a user's images
router.get('/', (req, res) => {
    images.getFromUser(req, res);
});

// Create a new image
router.post('/', (req, res) => {
    images.add(req, res);
})

// Get a single image by ID
router.get('/:imageId', (req, res) => {
    images.getById(req, res);
});

// Delete a single image by ID
router.delete('/:imageId', (req, res) => {
    images.remove(req, res);
});

module.exports = router;
