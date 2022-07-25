import {Router} from  "express";
import { allRouterDress } from "./Dress";
import {allRouterUser} from "./User";
import {allDressRentalRoutes} from "./Rental/RentalDress";
import {allAccessoryRentalRoutes} from "./Rental/RentalAccessory";

import {allTransactionRoutes} from "./Transaction";
import { allRouteraccessory } from "./Accessory";
import { allRouterClient } from "./Client";

const router = Router();
router.use(allRouterDress);
router.use(allRouterUser );
router.use(allRouteraccessory );
router.use(allAccessoryRentalRoutes );
router.use(allDressRentalRoutes );
router.use(allTransactionRoutes );
router.use(allRouterClient );

export {router}  