import { Router } from "express";
import { ServiceControllers } from "./service.controller";
import validateRequest from "../../middlewares/validateRequest";
import { serviceValidations } from "./service.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = Router();

router.get("/max-price", ServiceControllers.getMaxPrice);
router.post(
  "/create",
  auth(USER_ROLE.ADMIN),
  // validateRequest(serviceValidations.createServiceValidationSchema),
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

// router.delete(
//   "/:id",
//   auth(USER_ROLE.admin),
//   ServiceControllers.deleteSingleService
// );


export const ServiceRouters = router;
