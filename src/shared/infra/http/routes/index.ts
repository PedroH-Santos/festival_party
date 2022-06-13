import {Router} from  "express";
import { dressRouter } from "./dress.routes";


const router = Router();
router.use("/dress",dressRouter);


export {router}