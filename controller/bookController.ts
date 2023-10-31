import {bookModel} from "../model/bookmodel"
import {client, db} from "../utils/dbConfig"
import { Request, Response } from "express"
import {stautCode} from "../utils/statusCode"
import {ObjectId} from "mongodb"

export const createDetails= async (req: Request, res: Response) =>{
    try {
        await client.connect()
        const {name, course, subject, score} = req.body
        
        const details = new bookModel(name, course, subject, score)

        await db.insertOne(details)
        
        return res.status(stautCode.CREATED).json({
            message: "Book created",
            data: details
        })
    } catch (error) {
        return res.status(stautCode.BAD_REQUEST).json({
            message: "Error creating"
        })
    }
}
// export const readBook= async (req: Request, res: Response) =>{
//     try {
//         await client.connect()

//        const book= await db.find().toArray()

//         return res.status(stautCode.OK).json({
//             message: "All Books Gotten",
//             data: book
//         })
//     } catch (error) {
//         return res.status(stautCode.BAD_REQUEST).json({
//             message: "Error Reading Book"
//         })
//     }
// }
// export const readBookByID= async (req: Request, res: Response) =>{
//     try {
//         await client.connect();
//         const {bookID} = req.params

//         const book = await db.findOne({_id: new ObjectId(bookID)})

//         return res.status(stautCode.OK).json({
//             message: `${bookID} gotten`,
//             data: book
//         })
//     } catch (error) {
//         return res.status(stautCode.BAD_REQUEST).json({
//             message: "Error Reading Book"
//         })
//     }
// }
// export const readBookByCategory= async (req: Request, res: Response) =>{
//     try {
//         await client.connect();
//         const {category} = req.body
        
//         const book = await db.find({ category}).toArray();
        
//         return res.status(stautCode.OK).json({
//             message: `${category} gotten`,
//             data: book
//         })
//     } catch (error) {
//         return res.status(stautCode.BAD_REQUEST).json({
//             message: "Error Reading Book"
//         })
//     }
// }

// export const updateBook= async (req: Request, res: Response) =>{
//     try {
//      await client.connect();
//      const {bookId} = req.params
//      const {title, interesting} = req.body;

//      const book = await db.updateOne({_id: new ObjectId(bookId)}, {$set: {title, interesting}})

//         return res.status(stautCode.OK).json({
//             message: `${bookId} updated`,
//             data: book
//         })
//     } catch (error) {
//         return res.status(stautCode.BAD_REQUEST).json({
//             message: "Error Reading Book"
//         })
//     }
// }
// export const deleteBook= async (req: Request, res: Response) =>{
//     try {
//      await client.connect();
//      const {bookId} = req.params

//      await db.deleteOne({_id: new ObjectId(bookId)})

//         return res.status(stautCode.OK).json({
//             message: `${bookId} deleted successfully`,
//         })
//     } catch (error) {
//         return res.status(stautCode.BAD_REQUEST).json({
//             message: "Error Reading Book"
//         })
//     }
// }