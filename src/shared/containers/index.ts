import {container} from "tsyringe";


import { DressRepository } from '@modules/dress/infra/typeorm/repositories/DressRepository';
import { IDressRepository } from '@modules/dress/repositories/IDressRepository';
import { ICategoryDressRepository } from "@modules/dress/repositories/ICategoryDressRepository";
import { CategoryDressRepository } from "@modules/dress/infra/typeorm/repositories/CategoryDressRepository";
import { ImageDressRepository } from "@modules/dress/infra/typeorm/repositories/ImageDressRepository";
import { IImageDressRepository } from "@modules/dress/repositories/IImageDressRepository";


container.registerSingleton<IDressRepository>(
    "DressRepository",
    DressRepository
);
container.registerSingleton<ICategoryDressRepository>(
    "CategoryDressRepository",
    CategoryDressRepository
);
container.registerSingleton<IImageDressRepository>(
    "ImageDressRepository",
    ImageDressRepository
);