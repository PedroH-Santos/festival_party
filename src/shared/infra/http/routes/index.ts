import {Router} from  "express";
import { allRouterDress } from "./Dress";


const router = Router();
router.use(allRouterDress);
export {router}  