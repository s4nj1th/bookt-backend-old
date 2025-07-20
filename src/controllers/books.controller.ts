import { Request, Response, NextFunction } from "express";
import { searchBooksOpenLibrary } from "../services/openlibrary.service";

export const searchBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const query = req.query.q as string;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;

    if (!query) {
      res.status(400).json({ error: "Missing 'q' query parameter" });
      return;
    }

    const result = await searchBooksOpenLibrary(query, page, limit);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
