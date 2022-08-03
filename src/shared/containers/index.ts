import {container} from "tsyringe";
import "./providers";


import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';
import { IUserRepository } from "@modules/user/repositories/IUserRepository";
import { ITransactionRepository } from "@modules/transaction/repositories/ITransactionRepository";
import { TransactionRepository } from "@modules/transaction/infra/typeorm/repositories/TransactionRepository";



import { IClientRepository } from "@modules/client/repositories/IClientRepository";
import { ClientRepository } from "@modules/client/infra/typeorm/repositories/ClientRepository";
import { IImageProductRepository } from "@modules/product/repositories/IImageProductRepository";
import { IProductRepository } from "@modules/product/repositories/IProductRepository";
import { ICategoryProductRepository } from "@modules/product/repositories/ICategoryProductRepository";
import { ProductRepository } from "@modules/product/infra/typeorm/repositories/ProductRepository";
import { CategoryProductRepository } from "@modules/product/infra/typeorm/repositories/CategoryProductRepository";
import { ImageProductRepository } from "@modules/product/infra/typeorm/repositories/ImageProductRepository";
import { IRentalRepository } from "@modules/rental/repositories/IRentalRepository";
import { RentalRepository } from "@modules/rental/infra/typeorm/repositories/RentalRepository";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);




container.registerSingleton<ITransactionRepository>(
    "TransactionRepository",
    TransactionRepository
);
container.registerSingleton<IClientRepository>(
    "ClientRepository",
    ClientRepository
);



container.registerSingleton<IProductRepository>(
    "ProductRepository",
    ProductRepository
);
container.registerSingleton<ICategoryProductRepository>(
    "CategoryProductRepository",
    CategoryProductRepository
);
container.registerSingleton<IImageProductRepository>(
    "ImageProductRepository",
    ImageProductRepository
);





container.registerSingleton<IRentalRepository>(
    "RentalRepository",
    RentalRepository
);
