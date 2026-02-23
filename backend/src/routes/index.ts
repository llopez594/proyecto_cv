import { Router } from "express";
import aboutRoutes from "./about.routes";
import projectRoutes from "./project.routes";
import contactRoutes from "./contact.routes";
import servicesRoutes from "./services.routes";

const router = Router();

router.use("/about", aboutRoutes);
router.use("/projects", projectRoutes);
router.use("/contact", contactRoutes);
router.use("/services", servicesRoutes);

export default router;
