import { Router } from "express";
import { login } from "../controllers/user.js";


const authrouter = new Router();

authrouter.get('/',login);
export default authrouter ;