import { Router } from "express";
import { searchBooks } from "../controllers/books.controller";

const router = Router();

router.get("/search", searchBooks); // e.g. /api/books/search?q=harry+potter

export default router;
