import { Router } from "express";
import {
  createTodo,
  getTodos,
  patchTodo,
  deleteTodo,
} from "../controllers/todoControllers";

const router = Router();

router.post("/", createTodo);
router.get("/", getTodos);
router.patch("/:todoId", patchTodo);
router.delete("/:todoId", deleteTodo);

export default router;
