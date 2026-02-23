import express from "express";
import cors from "cors";
import routes from "./routes";
import { sequelize } from "./models/sequelize";
import "./models"; // esto registra asociaciones


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", routes);

// Health check
app.get("/", (_req, res) => {
    res.send("API Portfolio running");
});

// DB connection
sequelize
    .authenticate()
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("DB error:", err));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
