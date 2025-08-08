import express from "express";

import { createUser, userLogin } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", userLogin);

export default router;