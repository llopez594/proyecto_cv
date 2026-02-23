import { Router } from "express";
import { AboutController } from "../controllers/about.controller";

const router = Router();
router.get("/", AboutController.get);

export default router;
