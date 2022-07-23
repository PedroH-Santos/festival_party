import { getRepository, Repository } from "typeorm";
import { Transaction } from "../entities/Transaction";
import { ITransactionRepository } from "../../../repositories/ITransactionRepository";
import { ICreateTransactionDTO } from "../../../dtos/ICreateTransactionDTO";






class TransactionRepository implements ITransactionRepository {
    private repository: Repository<Transaction>
    constructor() {
        this.repository = getRepository(Transaction);
    }



    async create({ id, value, type, origin, description }: ICreateTransactionDTO): Promise<Transaction> {
        const transaction = this.repository.create({ id, value, type, origin, description  });
        await this.repository.save(transaction);
        return transaction;
    }
    async getAll(): Promise<Transaction[]> {
        const transactions = this.repository.find();
        return transactions;
    }

    async getById(id: string): Promise<Transaction> {
        const transaction = this.repository.findOne(id);
        return transaction;
    }
    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }




}

export { TransactionRepository }