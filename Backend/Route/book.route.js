import express from "express"
import { addBook, getAllBooks } from "../controller/book.controller.js"

import { verifyJWT } from "../middlewares/auth.middleware.js"
const router=express.Router()

router.post("/add",addBook)
router.get("/getAllBooks",getAllBooks)


export default router