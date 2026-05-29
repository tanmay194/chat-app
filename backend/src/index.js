import express from "express"
import "dotenv/config"
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import { friendRouter } from "./modules/friend/friend.routes.js";

const app = express();

app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());

app.use("/api/friend" , friendRouter)

app.get("/" , (req , res) => {
    res.send("hello from backend")
})

app.listen(3000 , () => {
    console.log(`server is running on http://localhost:3000`)
})