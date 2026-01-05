const notFoundHandler = (_, res) => {
    return res.status(404).json({
        message: "Resource not found",
    });
};

module.exports = notFoundHandler;
