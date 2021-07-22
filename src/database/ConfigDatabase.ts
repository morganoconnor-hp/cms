import * as process from "process";
import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

class Database {
    private static connection(): mysql.Connection {
        return mysql.createConnection({
            database: process.env.MYSQL_DATABASE,
            host: process.env.HOST_MACHINE_MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD
        });
    }

    public static async query(sqlQuery: string, parameters: any) {
        const connexion = this.connection();
        return await new Promise((resolve, reject) => {
            connexion.query(sqlQuery, parameters, (err, rows, fields) => {
                if (err) {
                    return reject(err)
                }
                resolve(rows)
            })
        })
    }
}

export default Database;