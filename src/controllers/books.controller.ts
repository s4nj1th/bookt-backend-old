import { Request, Response, NextFunction } from "express";
import { searchBooksOpenLibrary } from "../services/openlibrary.service";

export const searchBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const query = req.query.q as string;
    if (!query) {
      res.status(400).json({ message: "Missing search query" });
      return;
    }

    const books = await searchBooksOpenLibrary(query);
    res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};
