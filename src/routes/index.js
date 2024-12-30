import { Router } from "express";
import userRoutes from "../modules/users/index.js";

const router = Router();
router.use('/users/auth', userRoutes)

export default router;