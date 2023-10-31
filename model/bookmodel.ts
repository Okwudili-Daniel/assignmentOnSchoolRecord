import {ObjectId} from "mongodb"

export class bookModel{
    public _id: ObjectId;
    public name: string
    public course: string
    public subject: string
    public score: number

    constructor(name: string, course: string, subject: string, score: number,) {
        this._id = new ObjectId();
        this.name = name;
        this.course = course;
        this.subject = subject;
        this.score = score;
    }
}