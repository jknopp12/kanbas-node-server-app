import "dotenv/config";
import session from "express-session";
import express from 'express';
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import cors from "cors";
import mongoose from "mongoose";
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import UserRoutes from "./Users/routes.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb+srv://knoppjulia12:supersecretpassword@cluster0.5gnloep.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "default",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app)
app.listen(process.env.PORT || 4000);