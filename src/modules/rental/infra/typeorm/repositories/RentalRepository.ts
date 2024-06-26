import { getRepository, Repository } from "typeorm";
import { ICreateRentalDTO } from "../../../dtos/ICreateRentalDTO";
import { IRentalRepository } from "../../../repositories/IRentalRepository";
import { Rental } from "../entities/Rental";





class RentalRepository implements IRentalRepository {
    private repository: Repository<Rental>;
    private perPage = 10;
    constructor() {
        this.repository = getRepository(Rental);
    }






    async create({ id, value, expected_delivery_date, product_id, user_id, description, start_date, client_id, status }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({ id, value, expected_delivery_date, product_id, user_id, description, start_date, client_id, status });
        await this.repository.save(rental);
        return rental;
    }


    async getByDate(product_id: string, start_date: Date): Promise<Rental[]> {
        const rentalQuery = await this.repository.createQueryBuilder("rentals")
        rentalQuery.andWhere("product_id = :product_id", { product_id: product_id });
        rentalQuery.andWhere(` end_date IS NULL`);
        rentalQuery.andWhere(` timestamp '${start_date}'::date >= start_date::date AND  timestamp '${start_date}'::date <=   expected_delivery_date::date`);
        const rentals = await rentalQuery.getMany();
        return rentals;
    }
    async getAll(): Promise<Rental[]> {
        const rentals = await this.repository.find({
            relations: ['user', 'product', 'product.images', 'client'],
        });
        return rentals;
    }
    async getAllToday(): Promise<Rental[]> {
        const rentalQuery = await this.repository.createQueryBuilder("rentals");
        rentalQuery.leftJoinAndSelect("rentals.user", "users");
        rentalQuery.leftJoinAndSelect("rentals.product", "product");
        rentalQuery.leftJoinAndSelect("product.images", "products_images");
        rentalQuery.leftJoinAndSelect("rentals.client", "clients");
        rentalQuery.andWhere("start_date::date =  NOW()::date");
        rentalQuery.andWhere("status =  'OPEN' ");
        const rentals = await rentalQuery.getMany();

        return rentals;
    }


    async getCountAll(start_date: Date, expected_delivery_date: Date): Promise<number> {
        const sql = this.repository.createQueryBuilder("users")
        if (start_date != undefined ) {
            sql.andWhere(`start_date::date  >= timestamp '${start_date}'::date`);
        }
        if (expected_delivery_date != undefined ) {
            sql.andWhere(` expected_delivery_date::date <= timestamp '${expected_delivery_date}'::date  `);

        }
        const count = await sql.getCount();
        return count;
    }


    async getWithPagination(page: number, start_date: Date, expected_delivery_date: Date): Promise<Rental[]> {
        const sql = this.repository.createQueryBuilder("rentals")
            .skip(this.perPage * (page - 1))
            .take(this.perPage);
        if (start_date != undefined ) {
            sql.andWhere(`start_date::date  >= timestamp '${start_date}'::date`);
        }
        if (expected_delivery_date != undefined ) {
            sql.andWhere(` expected_delivery_date::date <= timestamp '${expected_delivery_date}'::date  `);

        }
        sql.leftJoinAndSelect("rentals.user", "users");
        sql.leftJoinAndSelect("rentals.product", "product");
        sql.leftJoinAndSelect("product.images", "products_images");
        sql.leftJoinAndSelect("rentals.client", "clients");
        const rentals = sql.getMany();
        return rentals;
    }


    async getAllFinishToday(): Promise<Rental[]> {
        const rentalQuery = await this.repository.createQueryBuilder("rentals");
        rentalQuery.leftJoinAndSelect("rentals.user", "users");
        rentalQuery.leftJoinAndSelect("rentals.product", "product");
        rentalQuery.leftJoinAndSelect("product.images", "products_images");
        rentalQuery.leftJoinAndSelect("rentals.client", "clients");
        rentalQuery.andWhere("expected_delivery_date::date <=  NOW()::date");
        rentalQuery.andWhere("status =  'PROGRESS' ");
        const rentals = await rentalQuery.getMany();

        return rentals;
    }
    async getById(id: string): Promise<Rental> {
        const rental = await this.repository.findOne({
            relations: ['user', 'product', 'client', 'product.category', 'product.images', 'transactions'],
            where: { id }
        });
        return rental;
    }
    async getByProductId(product_id: string): Promise<Rental[]> {
        const rental = await this.repository.find({
            relations: ['user', 'product', 'client'],
            where: { product_id }
        });
        return rental;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }

    async updateFinish(id: string, end_date: Date): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .update()
            .set({ end_date })
            .where("id = :id")
            .setParameters({ id })
            .execute();
    }

}

export { RentalRepository }