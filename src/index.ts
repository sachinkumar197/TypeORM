import { createConnection } from "typeorm"
import Express from "express"
import { Client } from "./entities/Client"
import { Banker } from "./entities/Banker"
import { Transaction } from "./entities/Transaction"
import { createClientRouter } from "./routes/create_client"

const app = Express()

const main = async () => {
    try {
        await createConnection ({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: 'postgres',
        password: '8560229',
        database: 'typeorm',
        entities: [Client, Banker, Transaction],
        synchronize: true
    })
    console.log('Connected to Postgres')
    app.use(Express.json())
    app.use(createClientRouter)

    app.listen(8080, () => {
        console.log("Now running on port 8080")
    })
} catch (error) {
    console.error('Unable to connect to Postgres')
    throw new Error("Unable to connect to DB")
}
}

main()