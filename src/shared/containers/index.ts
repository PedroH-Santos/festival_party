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
import { DressRentalRepository } from "@modules/rentals/infra/typeorm/repositories/DressRentalRepository";
import { IDressRentalRepository } from "@modules/rentals/repositories/IDressRentalRepository";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { TransactionRepository } from "@modules/transaction/infra/typeorm/repositories/TransactionRepository";

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