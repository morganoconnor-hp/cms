import {RouteInterface} from "../../interface/RouteInterface";

class Route implements RouteInterface {
    constructor(public method: string, public url: string, public callback: any) {}
}

export default Route;