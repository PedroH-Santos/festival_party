import {Router} from  "express";
import { allRouterDress } from "./Dress";
import {allRouterUser} from "./User";
import {allDressRentalRoutes} from "./Rental/RentalDress";
import {allAccessoryRentalRoutes} from "./Rental/RentalAccessory";

import {allTransactionRoutes} from "./Transaction";
import { allRouteraccessory } from "./Accessory";

const router = Router();
router.use(allRouterDress);
router.use(allRouterUser );
router.use(allRouteraccessory );
router.use(allAccessoryRentalRoutes );
router.use(allDressRentalRoutes );
router.use(allTransactionRoutes );

export {router}  