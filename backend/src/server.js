import express from "express";
import dotenv from "dotenv";


import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();
//console.log(process.env.MONGO_URI);
const app=express();

const PORT=process.env.PORT || 5001



app.use(
    cors({
        origin:"http://localhost:5173"
}));
app.use(express.json()); //this middleware willl parse the json bodies

//this is the middleware only.. it basically gets acces to the req bodies

app.use(rateLimiter);


app.use("/api/notes",notesRoutes);//prefixing of root endpoint
//in this way we can add product route, note route, payment route


//first connect DB the start listeing to upcoming promise reqs
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("Server started on port: ",PORT);
    });
});

