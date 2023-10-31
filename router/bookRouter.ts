import { Router } from "express";
import { createDetails  } from "../controller/bookController";

const router: Router = Router()

router.route("/create-details").post(createDetails);
// router.route("/read-book").get(readBook);
// router.route("/read-book-id/:bookID").get(readBookByID)
// router.route("/read-book-category").get(readBookByCategory)
// router.route("/update-book/:bookId").patch(updateBook)
// router.route("/delete-book/:bookId").delete(deleteBook)

export default router;