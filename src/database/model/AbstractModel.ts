import {FieldInterface} from '../../interface/FieldInterface'
import Query from "../ConfigQuery";

abstract class AbstractModel {
    table: string;
    fields: Array<FieldInterface> = [];
    query: any;

    constructor(table: string, fields: Array<FieldInterface>) {
        this.table   = table;
        this.fields  = fields;
        this.query   = new Query(table)
    }

    public findAll() {
        const query = new Query(this.table);
        return query.findAll().then(r => {
            r
        });
    }

    public find(id: Number) {
        const query = new Query(this.table);
        return query.find(id).then(r => {
            r
        });
    }
}

export default AbstractModel;