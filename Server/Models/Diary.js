const db = require("../database/connect")

class Diary {
  constructor ({diary_id,title,content,user_id,release}){
    this.diary_id = diary_id;
    this.title  = title;
    this.content = content;
    this.user_id = user_id;
    this.release = release;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM diary;")
    return response.rows.map(d => new Diary(d))
  }
  
  static async getAllByUserId(id) {
    const response = await db.query("SELECT * FROM diary WHERE user_id = $1",[id])
    if (response.rows.length === 0){
      throw new Error("No diaries available");
    }
    return response.rows.map(d => new Diary(d))
  }

  static async getOneByDiaryId(id) {
    const response = await db.query("SELECT * FROM diary WHERE diary_id = $1", [id]);
    if (response.rows.length != 1) {
      throw new Error("Unable to locate diary.")
    }
    return new Diary(response.rows[0]);
  }

  static async create(data) {
    const {title, content, user_id, release} = data;
    const response = await db.query("INSERT INTO diary (title, content, user_id, release) VALUES ($1, $2, $3, $4) RETURNING *;",
    [title, content, user_id, release]);
    return response.rows.map(d => new Diary(d));
  }

  async destroy() {
    let response = await db.query("DELETE FROM diary WHERE diary_id = $1 RETURNING *;", [this.id]);
    return new Diary(response.rows[0]);
  }
}


module.exports = Diary;