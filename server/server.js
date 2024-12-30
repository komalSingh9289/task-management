import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connection from './db.js';
import taskRouter from "./Routers/task-routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/api/task', taskRouter)

const PORT = process.env.PORT || 5000



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connection();
})

