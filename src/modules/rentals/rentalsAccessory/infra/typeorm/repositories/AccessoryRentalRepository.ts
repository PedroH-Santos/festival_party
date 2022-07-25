import { getRepository, Repository } from "typeorm";
import { ICreateAccessoryRentalDTO } from "../../../dtos/ICreateAccessoryRentalDTO";
import { IAccessoryRentalRepository } from "../../../repositories/IAccessoryRentalRepository";
import { AccessoryRental } from "../entities/AccessoryRental";





class AccessoryRentalRepository implements IAccessoryRentalRepository {
    private repository: Repository<AccessoryRental>
    constructor() {
        this.repository = getRepository(AccessoryRental);
    }





    async create({ id, value, expected_delivery_date, accessory_id, user_id, description, start_date,client_id }: ICreateAccessoryRentalDTO): Promise<AccessoryRental> {
        const rental = this.repository.create({ id, value, expected_delivery_date, accessory_id, user_id, description, start_date,client_id });
        await this.repository.save(rental);
        return rental;
    }


    async getByDate(accessory_id: string, start_date: Date): Promise<AccessoryRental[]> {
        const rentalQuery = await this.repository.createQueryBuilder("rentals")
        rentalQuery.andWhere("accessory_id = :accessory_id", { accessory_id: accessory_id });
        rentalQuery.andWhere(` end_date IS NULL`);
        rentalQuery.andWhere(` timestamp '${start_date}'::date >= start_date::date AND  timestamp '${start_date}'::date <=   expected_delivery_date::date`);
        const rentals = await rentalQuery.getMany();
        return rentals;
    }
    async getAll(): Promise<AccessoryRental[]> {
        const rentals = await this.repository.find({
            relations: ['user','product','client'],
        });
        return rentals;
    }

    async getById(id: string): Promise<AccessoryRental> {
        const rental = await this.repository.findOne({
            relations: ['user','product','client'],
            where: { id }
        });
        return rental;
    }
    async getByAccessoryId(accessory_id: string): Promise<AccessoryRental[]> {
        const rental = await this.repository.find({
            relations: ['user','product','client'],
            where: { accessory_id }
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

export { AccessoryRentalRepository }