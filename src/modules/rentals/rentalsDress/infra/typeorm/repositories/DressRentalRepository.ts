import { getRepository, Repository } from "typeorm";
import { ICreateDressRentalDTO } from "../../../dtos/ICreateDressRentalDTO";
import { IDressRentalRepository } from "../../../repositories/IDressRentalRepository";
import { DressRental } from "../entities/DressRental";





class DressRentalRepository implements IDressRentalRepository {
    private repository: Repository<DressRental>
    constructor() {
        this.repository = getRepository(DressRental);
    }





    async create({ id, value, expected_delivery_date, dress_id, user_id, description, start_date }: ICreateDressRentalDTO): Promise<DressRental> {
        const user = this.repository.create({ id, value, expected_delivery_date, dress_id, user_id, description, start_date });
        await this.repository.save(user);
        return user;
    }


    async getByDate(dress_id: string, start_date: Date): Promise<DressRental[]> {
        const rentalQuery = await this.repository.createQueryBuilder("rentals")
        rentalQuery.andWhere("dress_id = :dress_id", { dress_id: dress_id });
        rentalQuery.andWhere(` end_date IS NULL`);
        rentalQuery.andWhere(` timestamp '${start_date}'::date >= start_date::date AND  timestamp '${start_date}'::date <=   expected_delivery_date::date`);
        console.log(rentalQuery.getSql());
        const rentals = await rentalQuery.getMany();
        return rentals;
    }
    async getAll(): Promise<DressRental[]> {
        const rentals = await this.repository.find();
        return rentals;
    }

    async getById(id: string): Promise<DressRental> {
        const rental = await this.repository.findOne(id);
        return rental;
    }
    async getByDressId(dress_id: string): Promise<DressRental[]> {
        const rental = await this.repository.find({
            relations: ['user'],
            where: { dress_id}
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

export { DressRentalRepository }