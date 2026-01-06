import postmodel from "../models/post.model.js";
import paginate from "../utils/paginate.js";

class PostService {
    async pagination(page, user_id) {
        return paginate(postmodel, page, 10, user_id);
    }
}

export default new PostService();
