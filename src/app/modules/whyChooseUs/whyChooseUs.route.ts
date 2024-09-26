import { Router } from "express";
import { WhyChooseUsControllers } from "./whyChooseUs.controller";


const router = Router()

router.get('/all-whyChooseUs', WhyChooseUsControllers.getAllWhyChooseUs)


export const WhyChooseUsRouters = router

