import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import routes from "./routes";
import { sequelize } from "./models/sequelize";
import "./models";


const app = express();
const PORT = process.env.PORT || 4000;

const parseCorsOrigins = (value?: string): string[] => {
    if (!value) return [];
    return value
        .split(",")
        .map((o) => o.trim())
        .filter(Boolean);
};

const allowedOrigins = parseCorsOrigins(process.env.CORS_ORIGIN);
const corsOptions: CorsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin) return callback(null, true); // Permitir requests sin origin (Postman, curl, health checks) 
        const isLocalhost = // Permitir localhost en dev  
            origin.startsWith("http://localhost:") ||
            origin.startsWith("http://127.0.0.1:");
        const isAllowed = allowedOrigins.includes(origin); // Permitir dominios configurados
        if (isLocalhost || isAllowed) return callback(null, true);
        return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

// API routes
app.use("/api", routes);

// Health check
app.get("/", (_req: Request, res: Response) => {
    res.send("API Portfolio running");
});

// DB connection
sequelize
    .authenticate()
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("DB error:", err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
