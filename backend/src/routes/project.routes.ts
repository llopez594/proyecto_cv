import { Router } from "express";
import { ProjectController } from "../controllers/project.controller";

const router = Router();
router.get("/", ProjectController.getAll);
router.get("/:slug", ProjectController.getBySlug);

export default router;
