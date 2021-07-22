import {ServerResponse} from "http";
import View from "../templating/View";

class Response {
    constructor(private res:ServerResponse) {
        this.res = res;
    }

    setHeader(parameter:any) {
        if (!(parameter instanceof View)) {
            this.res.setHeader('Content-type', 'application/json');
        } else {
            this.res.setHeader('Content-type', 'text/html');
        }
    }

    public emit(parameter:any) {
        this.setHeader(parameter);

        if (parameter instanceof View) {
            parameter = parameter.getView();
        } else {
            parameter = JSON.stringify(parameter);
        }

        this.res.end(parameter);
    }
}

export default Response;