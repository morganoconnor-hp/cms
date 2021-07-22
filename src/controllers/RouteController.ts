import View from "../templating/View";
import ArticleController from "./ArticleController";

class RouteController {
    public static showIndexPage = () => {
        return View.make('home.ejs', []);
    };

    public static showArticlesPage = () => {
        return ArticleController.getArticles();
    };

    public static show404Page = () => {
        return View.make('404.ejs', 'test');
    };
}

export default RouteController;