import Article from "../database/model/Article";

class ArticleController {
    public static async getArticles() {
        console.log("test", await Article.findAll());
        return await Article.findAll();
    }

    public static getSingleArticle(id: Number) {
        return Article.find(id);
    }

    public static postArticle() {
        return {message: 'test create article'}
    }

    public static putArticle() {
        return {message: 'test update article'}
    }

    public static deleteArticle() {
        return {message: 'test delete article'}
    }
}

export default ArticleController;