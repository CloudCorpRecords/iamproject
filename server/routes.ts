import type { Express } from "express";
import chatRouter from "./routes/chat";

export function registerRoutes(app: Express) {
  // Chat routes
  app.use("/api", chatRouter);
}
