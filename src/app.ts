import express,{Request, Response} from "express";
import todoRouter from "./todo/route";

const app = express();

app.use(express.json());


app.use("/api/v1", todoRouter);

app.use("/", (req:Request, res:Response)=>{
    res.send("My Backend api")
})

export default app;
