import {Router} from  "express";
import { dressRouter } from "./dress.routes";
import { categoryDressRouter } from "./dressCategories.routes";


const router = Router();
router.use("/dress",dressRouter);
router.use("/dress/category",categoryDressRouter);


export {router}