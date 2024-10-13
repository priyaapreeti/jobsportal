import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import userRoutes from "./routes/user.routes.js";
import companyRoutes from "./routes/company.routes.js";

dotenv.config({});

const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = { origin: "http://localhost:5173", credentials: true }; //accept request options from the fe at this port
app.use(cors(corsOptions));

app.get("/home", (req, res) => {
  return res.status(200).send({ message: "from backend" });
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/company", companyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDb();
  console.log(`listening on ${PORT} port`);
});
