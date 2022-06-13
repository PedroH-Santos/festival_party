import {container} from "tsyringe";


import { DressRepository } from '@modules/dress/infra/typeorm/repositories/DressRepository';
import { IDressRepository } from '@modules/dress/repositories/IDressRepository';


container.registerSingleton<IDressRepository>(
    "DressRepository",
    DressRepository
);