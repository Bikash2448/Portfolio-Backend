import express from "express"
import { saveRequest } from "../controller/user.controller.js"

export const route = express.Router()

route.post("/user",saveRequest)
