import { Router } from "express";
import { requireAuth } from "../../lib/require-auth.js";
import { sendRequest , listFriends , discover} from "./friend.controller.js";


export const friendRouter = Router()

friendRouter.use(requireAuth)

//send request
friendRouter.post("/request" , sendRequest)


//list friends 
friendRouter.get("/list" , listFriends)


//discover 
friendRouter.get("/discover" , discover)