const postmodel = require("@/models/post.model");
const paginate = require("@/utils/paginate");

class PostService {
    async pagination(page, user_id) {
        return paginate(postmodel, page, 10, user_id);
    }
}

module.exports = new PostService();
