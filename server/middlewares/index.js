module.exports.checkAuth = (req, res, next) => {
    if (!req.session.passport) {
        return res.status(401).json({
            status: 'error',
            message: 'not authenticated',
        });
    } else {
        next();
    }
};
