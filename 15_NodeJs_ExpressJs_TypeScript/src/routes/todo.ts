import { Router } from "express";

const router = Router();

router.post("/");
router.get("/");
router.patch("/:todoId");
router.delete("/:todoId");

export default router;
