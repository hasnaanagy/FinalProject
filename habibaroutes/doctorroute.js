import { Router } from "express";
import doctormodel from "../models/doctormodel.js";
import { create, index, show, store } from "../controllers/doctorcontroller.js";
const router = new Router();
router.get('/', index);
router.get('/create', create);
router.post('/',store);
router.get('/:_id',show);

export default router;