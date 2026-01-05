const postService = require("@/service/post.service");

const getAll = async (req, res) => {
    const { page, user_id } = req.query;
    const result = await postService.pagination(page, user_id);
    res.paginate(result);
};

module.exports = { getAll };
