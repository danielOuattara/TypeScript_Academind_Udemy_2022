import express, { Request, Response, NextFunction } from "express";

import todoRoutes from "./routes/todoRoutes";

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send("<h1>Welcome to todos application</h1>");
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: error.message });
});

app.listen(3000);
