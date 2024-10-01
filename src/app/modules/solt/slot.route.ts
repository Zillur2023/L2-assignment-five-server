import { Router } from "express";
import { SlotControllers } from "./slot.controller";


const router = Router();

router.post("/create", SlotControllers.createSlot);
router.get("/allSlots", SlotControllers.getAllSlots);
router.get("/available/:service", SlotControllers.availableSlot);
router.put("/update/:id", SlotControllers.updateSlot);

export const SlotRoutes = router;
