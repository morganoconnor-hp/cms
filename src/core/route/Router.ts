import Route from "./Route";
import {MethodEnum} from "../../enum/MethodEnum";

class Router {
    static instance:Router;
    routes:Route[] = [];

    constructor() {}

    public add(method:string, url:string, callback:any) {
        this.routes.push(new Route(method, url, callback))
    }

    static get(url:string, callback:any) {
        const instance = this.getInstance()
        instance.add(MethodEnum.Get, url, callback)
    }

    private static getInstance() {
        if(!this.instance) {
            this.instance = new Router();
        }

        return this.instance;
    }

    static getRoute() {
        return this.getInstance().routes
    }
}

export default Router;