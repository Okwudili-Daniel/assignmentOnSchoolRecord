import { Router } from "express";
import { createDetails, readDetails, readDetailByID, readDetailByScore, readDetailByCourse, readDetailByName, updateBook, deleteBook  } from "../controller/bookController";

const router: Router = Router()

router.route("/create-details").post(createDetails);
router.route("/read-details").get(readDetails);
router.route("/read-details-by-id/:performanceId").get(readDetailByID);
router.route("/read-details-by-score").get(readDetailByScore);
router.route("/read-details-by-course").get(readDetailByCourse);
router.route("/read-details-by-name").get(readDetailByName);
router.route("/updated/:performanceId").patch(updateBook);
router.route("/delete/:performanceId").delete(deleteBook);

export default router;