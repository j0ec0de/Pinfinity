import express from "express";

import { createUser, getUser, isLoggedIn, userLogin } from "../controller/auth.controller.js";



const router = express.Router();

router.post("/register", createUser);
router.post("/login", userLogin);
router.get('/me', isLoggedIn, getUser);


export default router;