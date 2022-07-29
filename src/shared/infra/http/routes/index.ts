import {Router} from  "express";
import {allRouterUser} from "./User";
import {allRouterProduct} from "./Product";

import {allTransactionRoutes} from "./Transaction";
import { allRouterClient } from "./Client";
import { allRouterAuthenticate } from "./Authenticate";
import {allRentalRoutes} from "./Rental";

const router = Router();
router.use(allRouterUser );
router.use(allRouterProduct );
router.use(allRentalRoutes );
router.use(allTransactionRoutes );
router.use(allRouterClient );
router.use(allRouterAuthenticate );

export {router}  