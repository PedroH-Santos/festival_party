import { getRepository, Repository } from "typeorm";
import { Transaction } from "../entities/Transaction";
import { ITransactionRepository } from "../../../repositories/ITransactionRepository";
import { ICreateTransactionDTO } from "../../../dtos/ICreateTransactionDTO";






class TransactionRepository implements ITransactionRepository {
    private repository: Repository<Transaction>;
    private perPage = 10;

    constructor() {
        this.repository = getRepository(Transaction);
    }



    async create({ id, value, type, origin, description,rental_id }: ICreateTransactionDTO): Promise<Transaction> {
        const transaction = this.repository.create({ id, value, type, origin, description,rental_id  });
        await this.repository.save(transaction);
        return transaction;
    }
    async getAll(): Promise<Transaction[]> {
        const transactions = this.repository.find();
        return transactions;
    }

    async getCountAll(search: string): Promise<number> {
        const sql = this.repository.createQueryBuilder("transactions")
        if(search != undefined){
            sql.where("transactions.origin like '%' || :origin || '%'", {origin: search })
        }
        const count = await sql.getCount();
        return count;
    }


    async getWithPagination(page: number,search: string): Promise<Transaction[]> {
        const sql = await this.repository.createQueryBuilder("transactions")
        .skip(this.perPage * (page - 1))
        .take(this.perPage);

        if(search != undefined){
            sql.where("transactions.origin like '%' || :origin || '%'", {origin: search })
        }
        const users = sql.getMany();
        return users;
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