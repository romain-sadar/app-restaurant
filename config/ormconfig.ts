import "reflect-metadata"
import { DataSource } from "typeorm";

export const AppDataSource =  new DataSource({
    type: "mysql",
    host: "localhost",
    password: "root",
    username: "root",
    database: "cashier-exercice",
    port: 3306,
    synchronize: true,
    dropSchema: false,
    migrationsTableName: "migration_versions",
    migrations: ["migrations/*.ts"],
    entities: [
        "src/entities/**/*.ts"
    ],
})


AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        
    })
    .catch((error) => console.log(error))