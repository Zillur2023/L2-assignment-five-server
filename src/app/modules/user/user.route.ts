import { Router } from "express";
import { UserControllers } from "./user.controller";



const router = Router()

router.post('/create-user', UserControllers.createUser)
router.get('/allUser', UserControllers.getAllUser)
router.get('/:email', UserControllers.getUser)
router.get('/:id', UserControllers.getUserById)
router.put("/update/:id", UserControllers.updateUser);



export const UserRouters = router;