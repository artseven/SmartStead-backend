function ensureLoggedInApiVersion(req, res, next) {
    if (req.isAuthenticated()) {
        next();
        return;
    }

    res.status(401).json({ message: 'You need to log in' });
}


module.exports = ensureLoggedInApiVersion;