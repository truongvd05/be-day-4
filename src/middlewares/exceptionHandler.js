const exceptionHandler = (err, _, res, next) => {
    res.status(err.status || 500).json({
        status: "error",
        message: err.message || "Internal server error",
    });
};

module.exports = exceptionHandler;
