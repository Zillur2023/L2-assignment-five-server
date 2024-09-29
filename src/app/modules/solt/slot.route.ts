import { Router } from "express";
import { SlotControllers } from "./slot.controller";
import validateRequest from "../../middlewares/validateRequest";
import { slotValidations } from "./slot.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = Router();

router.post(
  "/create",
  auth(USER_ROLE.ADMIN),
  SlotControllers.createSlot
);
router.get("/allSlots", SlotControllers.getAllSlots)
router.get("/available/:service", SlotControllers.availableSlot);
router.put("/update/:id",auth(USER_ROLE.ADMIN), SlotControllers.updateSlot);

export const SlotRoutes = router;
