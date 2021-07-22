import {IncomingMessage} from "http";

class Request {
    public method: string | undefined;
    public url: string | undefined;

    constructor(req:IncomingMessage) {
        this.method = req.method;
        this.url = req.url;
    }
}

export default Request;