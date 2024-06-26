import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";
import { Transaction } from "../infra/typeorm/entities/Transaction";

interface ITransactionRepository{
    create({id,value,type,origin,description,product_id}: ICreateTransactionDTO): Promise<Transaction>;
    getAll(): Promise<Transaction[]>;
    getCountAll(search: string): Promise<number>;
    getWithPagination(page: number,search: string): Promise<Transaction[]>;
    getById(id: string): Promise<Transaction>;
    delete(id: string): Promise<void>;
}


export {ITransactionRepository}