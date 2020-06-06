const router = require('express').Router();
const images = require('../controllers/imageController');

router.get('/', (req, res) => {
    images.getAll(req, res);
});

router.get('/:userId', (req, res) => {
    images.getFromUser(req, res);
});

module.exports = router;
