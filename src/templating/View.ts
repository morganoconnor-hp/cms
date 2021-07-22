import * as ejs     from "ejs";
import * as fs      from "fs";
import * as path    from "path";

export class View {
    constructor(private view_path:string, private data:any){}

    getView() {
        let htmlContent = fs.readFileSync(path.join(__dirname, `../views/${this.view_path}`), 'utf8');
        return ejs.render(htmlContent, {filename: this.view_path, data: this.data});
    }

    static make(view_path:string, data:any) {
        return new View(view_path, data)
    }
}

export default View;