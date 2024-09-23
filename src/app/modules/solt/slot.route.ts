import { Router } from "express";
import { SlotControllers } from "./slot.controller";
import validateRequest from "../../middlewares/validateRequest";
import { slotValidations } from "./slot.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = Router();

router.post(
  "/create",
  // validateRequest(slotValidations.createSlotValidationSchema),
  SlotControllers.createSlot
);
router.get("/allSlots", SlotControllers.getAllSlots)
router.get("/available/:service", SlotControllers.availableSlot);
router.put("/update/:id", SlotControllers.updateSlot);

export const SlotRoutes = router;
