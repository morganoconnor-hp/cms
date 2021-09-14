import View from "../templating/View";
import ArticleController from "./ArticleController";


class RouteController {

    public static showIndexPage = () => {
        return View.make('home.ejs', []);
    };

    public static showArticlesPage = async () => {
        const Articles = await ArticleController.getArticles();
        console.log(Articles);
        return View.make('articles.ejs', [Articles]);
    };

    public static show404Page = () => {
        return View.make('404.ejs', 'test');
    };
}

export default RouteController;