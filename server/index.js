import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import Product from "./models/Product.js";
import { kpis, products } from "./data/data.js";
import KPI from "./models/KPI.js";

/* Configuraions */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes)

/* mongoose setup */
const PORT = process.env.PORT || 9000;
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
    app.listen(PORT, () => console.log(`Server PORT: ${PORT}`));

    /* ADD DATA ONE TIME ONLY AS NEEDED. This is where data is being pushed to the database, I am hardcoding for now til I figure out why my mongo not working :< */
    //await mongoose.connection.db.dropDataBase();
    //KPI.insertMany(kpis);
    //Product.insertMany(products)

})
.catch((error) => console.log(`\nERROR\n ${error} did not connect`))