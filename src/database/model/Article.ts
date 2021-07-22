import AbstractModel from "./AbstractModel";
import {ModelInterface} from "../../interface/ModelInterface";
import {FieldInterface} from "../../interface/FieldInterface";
import FieldEnum from "../../enum/FieldEnum";

class Article extends AbstractModel implements ModelInterface{
    table: string = 'article';
    fields: Array<FieldInterface> = [];
}

const article = new Article('article', [
    { field: "id", type: FieldEnum.Number },
    { field: "title", type: FieldEnum.String },
    { field: "content", type: FieldEnum.String },
]);

export default article;