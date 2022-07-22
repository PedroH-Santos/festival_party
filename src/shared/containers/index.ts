import {container} from "tsyringe";
import "./providers";


import { DressRepository } from '@modules/dress/infra/typeorm/repositories/DressRepository';
import { IDressRepository } from '@modules/dress/repositories/IDressRepository';
import { ICategoryDressRepository } from "@modules/dress/repositories/ICategoryDressRepository";
import { CategoryDressRepository } from "@modules/dress/infra/typeorm/repositories/CategoryDressRepository";
import { ImageDressRepository } from "@modules/dress/infra/typeorm/repositories/ImageDressRepository";
import { IImageDressRepository } from "@modules/dress/repositories/IImageDressRepository";
import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { DressRentalRepository } from "@modules/rentals/rentalsDress/infra/typeorm/repositories/DressRentalRepository";
import { IDressRentalRepository } from "@modules/rentals/rentalsDress/repositories/IDressRentalRepository";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { TransactionRepository } from "@modules/transaction/infra/typeorm/repositories/TransactionRepository";


import { AccessoryRepository } from '@modules/accessory/infra/typeorm/repositories/AccessoryRepository';
import { IAccessoryRepository } from '@modules/accessory/repositories/IAccessoryRepository';
import { ICategoryAccessoryRepository } from "@modules/accessory/repositories/ICategoryAccessoryRepository";
import { CategoryAccessoryRepository } from "@modules/accessory/infra/typeorm/repositories/CategoryAccessoryRepository";
import { ImageAccessoryRepository } from "@modules/accessory/infra/typeorm/repositories/ImageAccessoryRepository";
import { IImageAccessoryRepository } from "@modules/accessory/repositories/IImageAccessoryRepository";
import { IAccessoryRentalRepository } from "@modules/rentals/rentalsAccessory/repositories/IAccessoryRentalRepository";
import { AccessoryRentalRepository } from "@modules/rentals/rentalsAccessory/infra/typeorm/repositories/AccessoryRentalRepository";

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
container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);

container.registerSingleton<IDressRentalRepository>(
    "DressRentalRepository",
    DressRentalRepository
);


container.registerSingleton<ITransactionRepository>(
    "TransactionRepository",
    TransactionRepository
);



container.registerSingleton<IAccessoryRepository>(
    "AccessoryRepository",
    AccessoryRepository 
);
container.registerSingleton<ICategoryAccessoryRepository>(
    "CategoryAccessoryRepository",
    CategoryAccessoryRepository
);
container.registerSingleton<IImageAccessoryRepository>(
    "ImageAccessoryRepository",
    ImageAccessoryRepository
);
container.registerSingleton<IAccessoryRentalRepository>(
    "AccessoryRentalRepository",
    AccessoryRentalRepository
);
