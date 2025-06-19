import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRoutes from './routes/index.routes';
import booksRoutes from "./routes/books.routes";
import errorHandler from './middlewares/error.middleware';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use('/', indexRoutes);

app.use("/api/books", booksRoutes);
app.use(errorHandler);

export default app;
