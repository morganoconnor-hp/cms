import View from "../templating/View";

class RouteController {
    public static showIndexPage = () => {
        return View.make('home.ejs', 'test');
    };

    public static showContactPage = () => {
        return {toto : "toto"};
    };

    public static show404Page = () => {
        return View.make('404.ejs', 'test');
    };
}

export default RouteController;