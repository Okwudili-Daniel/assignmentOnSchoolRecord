import {bookModel} from "../model/bookmodel"
import {client, db} from "../utils/dbConfig"
import { Request, Response } from "express"
import {stautCode} from "../utils/statusCode"

export const createBook= async (req: Request, res: Response) =>{
    try {
        await client.connect()
        
        const {title, author,description,  category,  numbersOfPages, interesting} = req.body

        const book =new bookModel(title, author, description, category, numbersOfPages, interesting)

        await db.insertOne(book);
        
        return res.status(stautCode.CREATED).json({
            message: "Book created",
            data: book
        })
    } catch (error) {
        return res.status(stautCode.BAD_REQUEST).json({
            message: "Error creating"
        })
    }
}
// export const ReadBook= async (req: Request, res: Response) =>{
//     try {
        

//         return res.send(stautCode.OK).json({
//             message: "Book created"
//         })
//     } catch (error) {
//         return res.send(stautCode.BAD_REQUEST).json({
//             message: "Error creating"
//         })
//     }
// }
