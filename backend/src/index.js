import express from "express"
import "dotenv/config"

const app = express();

app.get("/" , (req , res) => {
    res.send("hello from backend")
})

app.listen(3000 , () => {
    console.log(`server is running on http://localhost:3000`)
})