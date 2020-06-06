const router = require('express').Router();
const passport = require('../auth'),
    users = require('../controllers/userController');

router.post('/signin', (req, res, next) => {
    console.log('reee');
    res.send("here's a resource");
});

router.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        if (err) {
            res.status(400).json({
                status: 'error',
                message: err || 'Internal Server Error',
            });
        } else {
            res.status(200).json({
                status: 'authenticated',
                message: user,
            });
        }
    })(req, res, next);
});

router.get('/', (req, res) => {
    users.getUsers(req, res);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;
