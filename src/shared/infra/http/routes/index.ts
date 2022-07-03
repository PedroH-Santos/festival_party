import {Router} from  "express";
import { allRouterDress } from "./Dress";
import {allRouterUser} from "./User";
import {allDressRentalRoutes} from "./Rental/RentalDress";
import {allTransactionRoutes} from "./Transaction";

const router = Router();
router.use(allRouterDress);
router.use(allRouterUser );
router.use(allDressRentalRoutes );
router.use(allTransactionRoutes );

export {router}  