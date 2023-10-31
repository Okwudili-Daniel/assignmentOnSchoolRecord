import express, {Application} from "express"
import"./utils/dbConfig"
import cors from "cors"
import mainApp from "./mainApp"

const port: number= 6655;
const app: Application = express();

app.use(cors())
app.use(express.json());

mainApp(app);

const sever = app.listen(port, () =>{
    console.log("listening on port")
});

process.on('uncaughtException', (err: Error) =>{
    console.log("uncaughtException", err)

    process.exit(1);
})

process.on("rejectionHandled", (reason: any) =>{
    console.log("rejectionHandled", reason)

    sever.close(() =>{
        process.exit(1);
    })
})