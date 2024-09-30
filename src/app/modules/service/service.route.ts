import { Router } from "express";
import { ServiceControllers } from "./service.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = Router();

router.get("/max-price", ServiceControllers.getMaxPrice);
router.post(
  "/create",
  auth(USER_ROLE.ADMIN),
  ServiceControllers.createService
);

router.get("/all-service", ServiceControllers.getAllServices);

router.get("/:id", ServiceControllers.getSingleService);

router.put(
  "/:id",
  auth(USER_ROLE.ADMIN),
  ServiceControllers.updateSingleService
);
router.put("/update/:id",auth(USER_ROLE.ADMIN), ServiceControllers.updateService);
router.delete("/delete/:id",auth(USER_ROLE.ADMIN), ServiceControllers.deleteSingleService);



export const ServiceRouters = router;
