import express from "express";
import bookRoutes from "../Route/book.route.js";
import userRoutes from "../Route/user.route.js";
import cookieParser from "cookie-parser";
const app = express();
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const allowedOrigins = [
  "http://localhost:5173", // local dev
  process.env.CLIENT_URL    // deployed frontend
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/user", userRoutes);

export default app;
