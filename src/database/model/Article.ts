import AbstractModel from "./AbstractModel";
import {ModelInterface} from "../../interface/ModelInterface";
import {Field} from "../../interface/FieldInterface";

class Article extends AbstractModel implements ModelInterface{
    id: any;
    field: Field;
    table: string;

    constructor(id:number, Field:Field, table:string) {
        super();
        this.id = id;
        this.field = Field;
        this.table = table;
    }
}

export default Article;