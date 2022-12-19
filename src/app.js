
import express from "express";
import morgan from "morgan";

import propertyRoutes from "./routers/property.routers.js";
import indexRoutes from "./routers/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}))
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/api", propertyRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
});
app.set('view engine', 'ejs')

export default app;