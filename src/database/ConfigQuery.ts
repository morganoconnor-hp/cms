import Database from "./ConfigDatabase";

class Query {
    private readonly table: string;

    constructor(table: string) {
        this.table = table;
    }

    async findAll() {
        try {
            return await Database.query(`SELECT * FROM ${this.table}`, []);
        } catch (error) {
            console.log("findAll - error")
            console.log(error);
        }
    }

    async find(id: Number) {
        try {
            return await Database.query(`SELECT * FROM ${this.table} where id = ?`, [id]);
        } catch (error) {
            console.log("find - error")
            console.log(error);
        }
    }
}

export default Query;