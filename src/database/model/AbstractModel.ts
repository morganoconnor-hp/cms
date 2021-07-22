import Database from "../ConfigDatabase";

abstract class AbstractModel {
    protected constructor() {};

    static findAll() {
        try {
            return Database.query("SELECT * FROM user", []);
        } catch (error) {
            console.log(error);
        }
    }
}

export default AbstractModel;