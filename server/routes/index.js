const router = require('express').Router();

router.use('/users', require('./userRoutes'));
router.use('/images', require('./imageRoutes'));

router.get('/', (req, res) => {
    res.send(req.user || "no user");
})

module.exports = router;
