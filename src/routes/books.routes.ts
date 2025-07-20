import { Router } from "express";
import { searchBooks } from "../controllers/books.controller";

const router = Router();

router.get("/search", searchBooks);

export default router;
