const responseFormat = (_, res, next) => {
    res.success = (data, status = 200, props = {}) => {
        res.status(status).json({
            status: "success",
            data,
            ...props,
        });
    };

    res.paginate = ({ rows, pagination }) => {
        res.success(rows, 200, { pagination });
    };

    res.error = (error, status = 400) => {
        res.status(status).json({
            status: "error",
            error,
        });
    };

    next();
};

export default responseFormat;
