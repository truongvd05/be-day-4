module.exports = async (model, page = 1, perPage = 10, user_id) => {
    const offset = (page - 1) * perPage;

    const rows = await model.findAll(perPage, offset, user_id);
    const count = await model.count(user_id);

    const pagination = {
        total: count,
        per_page: perPage,
        current_page: page,
    };
    if (rows.length) {
        pagination.from = offset + 1;
        pagination.to = offset + rows.length;
    }
    return {
        rows,
        pagination,
    };
};
