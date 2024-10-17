import { Router } from "express";
import { getUsers, loginUser } from "../controllers/users.js";

const router = Router();

router.get("/", getUsers);
router.post("login", loginUser);

export default router;
