import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = { origin: "http://localhost:5173", credentials: true }; //accept request options from the fe at this port
app.use(cors(corsOptions));

app.get("/home",(req,res)=>{
  return res.status(200).send({"message" :"from backend"})
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log("listening on 3000 port");
});
