const router = require('express').Router();
const db = require('../controllers/userController');

router.get('/', (req, res) => {
    db.getUsers(req, res);
});

router.get('/', (req, res) => {
    db.getUsers(req, res);
});

module.exports = router;
