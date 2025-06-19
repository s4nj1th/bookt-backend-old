import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Unhandled Error:', err.message || err);
  res.status(500).json({ error: 'Internal Server Error' });
};

export default errorHandler;