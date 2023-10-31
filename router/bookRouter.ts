import { Router } from "express";
import { createBook } from "../controller/bookController";

const router: Router = Router()

router.route("/create-book").post(createBook);

export default router;