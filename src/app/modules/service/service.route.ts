import { Router } from "express";
import { ServiceControllers } from "./service.controller";

const router = Router();

router.get("/max-price", ServiceControllers.getMaxPrice);
router.post("/create", ServiceControllers.createService);

router.get("/all-service", ServiceControllers.getAllServices);

router.get("/:id", ServiceControllers.getSingleService);

router.put("/:id", ServiceControllers.updateSingleService);
router.put("/update/:id", ServiceControllers.updateService);
router.delete("/delete/:id", ServiceControllers.deleteSingleService);

export const ServiceRouters = router;
