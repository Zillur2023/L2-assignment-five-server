import { Router } from "express";
import { ReviewControllers } from "./review.controller";


const router = Router();


router.post("/create", ReviewControllers.createReview)
router.get("/all-review", ReviewControllers.getAllReviews)


export const ReviewRoutes = router;