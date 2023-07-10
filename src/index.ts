import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import feedback from "./routes/feedback";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(feedback);

app.listen(process.env.PORT, () => console.log("Server on!"));
