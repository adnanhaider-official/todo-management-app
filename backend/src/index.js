import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import todoRoutes from "./routes/todo.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/todos", todoRoutes);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

// Database Connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Successfully connected on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed ", error.message);
  });
