const router = require('express').Router();

router.use('/users', require('./userRoutes'));
router.use('/images', require('./imageRoutes'));

module.exports = router;
