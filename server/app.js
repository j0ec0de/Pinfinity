import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Node');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started running on port: ${PORT}`);
})