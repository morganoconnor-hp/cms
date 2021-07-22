import Router from "./Router";
import RouteController from "../../controllers/RouteController";

class Routes {
    static build () {
        Router.get('/', RouteController.showIndexPage)
        Router.get('/articles', RouteController.showArticlesPage)
        Router.get('/404', RouteController.show404Page)
    }
}

export default Routes;