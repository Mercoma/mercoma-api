module.exports.checkAuth = (req, res, next) => {
    if (!req.user) {
        return res.status(499).json({
            status: 'error',
            message: 'not authenticated',
        });
    } else {
        next();
    }
};
