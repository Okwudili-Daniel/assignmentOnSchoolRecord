import { Application, Request, Response } from "express";
import { stautCode } from "./utils/statusCode";
import book from "./router/bookRouter"

const mainApp = (app: Application)=>{
    app.use("/ap1/v1", book)
    app.get("/", (req: Request, res: Response) =>{
        try {
            return res.status(stautCode.OK).json({
                message: "Welcome"
            })
        } catch (error) {
            return res.status(stautCode.BAD_REQUEST).json({
                message: "Error"
            })
        }
    })
}

export default mainApp