const { default: pool } = require("@/config/database");

const findAll = async (limit, offset, user_id) => {
    let sql = `SELECT * FROM posts`;
    let params = [];
    if (user_id !== undefined) {
        sql += ` WHERE user_id = ?`;
        params.push(user_id);
    }
    sql += `
        ORDER BY created_at DESC
        LIMIT ? OFFSET ?
    `;
    params.push(limit, offset);
    const [rows] = await pool.query(sql, params);
    return rows;
};

const count = async (user_id) => {
    let sql = `SELECT COUNT(*) as total FROM posts`;
    let params = [];

    if (user_id !== undefined) {
        sql += ` WHERE user_id = ?`;
        params.push(user_id);
    }
    const [rows] = await pool.query(sql, params);
    return rows[0].total;
};

module.exports = {
    findAll,
    count,
};
