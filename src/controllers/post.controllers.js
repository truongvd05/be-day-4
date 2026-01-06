import postService from "../service/post.service.js";

const getAll = async (req, res, next) => {
    const { page, user_id } = req.query;
    try {
        const result = await postService.pagination(page, user_id);
        res.paginate(result);
    } catch (err) {
        next(err);
    }
};

export default { getAll };
