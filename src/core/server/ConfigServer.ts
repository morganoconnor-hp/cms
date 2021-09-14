import * as http from "http";
import { IncomingMessage, ServerResponse } from "http";
import Router from "../route/Router";
import Request from "../../manager/Request";
import Response from "../../manager/Response";

/**
 * The Server class defines the `getInstance` method that lets clients access
 * the unique Server instance.
 */
class Server {
    private static instance: Server;
    SERVER_ADDRESS:any = process.env.SERVER_ADDRESS || '127.0.0.1';
    SERVER_PORT:any = process.env.SERVER_PORT || 3652;

    /**
     * The Server's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() {}

    /**
     * The static method that controls the access to the Server instance.
     *
     * This implementation let you subclass the Server class while keeping
     * just one instance of each subclass around.
     */
    private static getInstance(): Server {
        if (!this.instance) {
            this.instance = new Server();
        }
        return this.instance;
    }

    /**
     * Finally, any Server should define some business logic, which can be
     * executed on its instance.
     */
    private init() {
        let server = http.createServer((req: IncomingMessage, res:ServerResponse)=>{
            let request:Request = new Request(req);
            let response = new Response(res);
            let parameters = this.checkRoute(request);
            response.emit(parameters);
        });

        server.listen(this.SERVER_PORT, this.SERVER_ADDRESS, () => {
            console.log(`Server is running on http://${this.SERVER_ADDRESS}:${this.SERVER_PORT} `);
        });
    }

    public static start(){
        this.getInstance().init()
    }

    public checkRoute(request:Request) {
        let route:any = '';
        let routeFiltered = Router.getRoute().filter(
            (route:any) =>
                route.method == request.method && route.url == request.url
        );

        if (routeFiltered && routeFiltered.length > 0) {
            route = routeFiltered.pop();
            return route.callback()
        } else {
            return Router.getRoute().find((route:any) => route.url == "/404")?.callback(request)
        }
    }
}
export default Server