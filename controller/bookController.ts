import {bookModel} from "../model/bookmodel"
import {client, db} from "../utils/dbConfig"
import { Request, Response } from "express"
import {stautCode} from "../utils/statusCode"
import {ObjectId} from "mongodb"

export const createDetails= async (req: Request, res: Response) =>{
    try {
        await client.connect()
        const {name, course, subject, score} = req.body;
        
        const details = new bookModel(name, course, subject, score);

        await db.insertOne(details);
        
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
export const readDetails= async (req: Request, res: Response) =>{
    try {
        await client.connect()

        const details = await db.find().toArray();        

        return res.status(stautCode.OK).json({
            message: "All performane Gotten",
            data: details
        })
    } catch (error) {
        return res.status(stautCode.BAD_REQUEST).json({
            message: "Error Reading Book"
        })
    }
}
export const readDetailByID= async (req: Request, res: Response) =>{
    try {
        await client.connect()
        const {performaneId} = req.params

        const details = await db.findOne({_id: new ObjectId(performaneId)})

        return res.status(stautCode.OK).json({
            message: `${performaneId} gotten`,
            data: details
        })
    } catch (error) {
        return res.status(stautCode.BAD_REQUEST).json({
            message: "Error Reading Book"
        })
    }
}
export const readDetailByScore= async (req: Request, res: Response) =>{
    try {
        await client.connect();
        const {score} = req.body

        const performance = await db.find({score}).toArray();
        
        return res.status(stautCode.OK).json({
            message: `${score} gotten`,
            data: performance
        })
    } catch (error) {
        return res.status(stautCode.BAD_REQUEST).json({
            message: "Error Reading Book"
        })
    }
}
export const readDetailByCourse= async (req: Request, res: Response) =>{
    try {
        await client.connect();
        const {course} = req.body

        const performance = await db.find({course}).toArray();
        
        return res.status(stautCode.OK).json({
            message: `${course} gotten`,
            data: performance
        })
    } catch (error) {
        return res.status(stautCode.BAD_REQUEST).json({
            message: "Error Reading Book"
        })
    }
}
export const readDetailByName= async (req: Request, res: Response) =>{
    try {
        await client.connect();
        const {name} = req.body

        const performance = await db.find({name}).toArray();
        
        return res.status(stautCode.OK).json({
            message: `${name} performance gotten`,
            data: performance
        })
    } catch (error) {
        return res.status(stautCode.BAD_REQUEST).json({
            message: "Error Reading Book"
        })
    }
}

export const updateBook= async (req: Request, res: Response) =>{
    try {
     await client.connect();
     const {performanceId} = req.params
    const {subject,score} = req.body

     const book = await db.updateOne({_id: new ObjectId(performanceId)}, {$set: {subject, score, }})

        return res.status(stautCode.OK).json({
            message: `${performanceId} updated`,
            data: book
        })
    } catch (error) {
        return res.status(stautCode.BAD_REQUEST).json({
            message: "Error Reading Book"
        })
    }
}

export const deleteBook= async (req: Request, res: Response) =>{
    try {
     await client.connect();
     const {performanceId} = req.params

     await db.deleteOne({_id: new ObjectId(performanceId)})

        return res.status(stautCode.OK).json({
            message: `${performanceId} deleted successfully`,
        })
    } catch (error) {
        return res.status(stautCode.BAD_REQUEST).json({
            message: "Error Reading Book"
        })
    }
}