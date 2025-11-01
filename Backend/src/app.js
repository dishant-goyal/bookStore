import express from "express";
import bookRoutes from "../Route/book.route.js";
import userRoutes from "../Route/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// ✅ Allow both localhost (for dev) and your deployed frontend (for production)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://paperpulse-kappa.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/user", userRoutes);

export default app;
