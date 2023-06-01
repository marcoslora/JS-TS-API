import express from "express";
import productsRoutes from "./routes/products.routes";
import config from "./config";
const app = express();
const portParse = parseInt(config.port);
app.set("port", 6001);
// Middlewares
app.use(express.json());
//formulario html
app.use(express.urlencoded({ extended: false }));
app.use(productsRoutes);
export default app;
