const router = require('express').Router();
const passport = require('../auth'),
    users = require('../controllers/userController');

router.post('/signin', (req, res, next) => {
    passport.authenticate('local-signin', (err, user, info) =>
        handleAuth(err, user, info, req, res),
    )(req, res, next);
});

router.post('/signup', (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) =>
        handleAuth(err, user, info, req, res),
    )(req, res, next);
});

router.get('/signout', (req, res) => {
    req.logout();
    res.json({
        status: 'success',
        message: 'signed out',
    });
});

router.get('/', (req, res) => {
    console.log(req.session.passport);

    users.getById(req, res);
});

function handleAuth(err, user, info, req, res) {
    if (err) {
        return res.status(400).json({
            status: 'error',
            message: err || "Something's broken! Oh no!",
        });
    } else {
        // Persistent Login
        req.login(user, (err, data) => {
            if (err) {
                return res.status(400).json({
                    status: 'error',
                    message: err || "Something's broken! Oh no!",
                });
            } else {
                return res.json(user);
            }
        });
    }
}

module.exports = router;
