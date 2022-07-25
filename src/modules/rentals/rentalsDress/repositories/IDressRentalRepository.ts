import { ICreateDressRentalDTO } from "../dtos/ICreateDressRentalDTO";
import { DressRental } from "../infra/typeorm/entities/DressRental";






interface IDressRentalRepository {
    create({id,value, expected_delivery_date, dress_id, user_id,description,start_date,client_id}: ICreateDressRentalDTO): Promise<DressRental>;
    getByDate(dress_id: string,start_date: Date): Promise<DressRental[]>
    getAll(): Promise<DressRental[]>;
    getById(id: string): Promise<DressRental>;
    getByDressId(dress_id: string): Promise<DressRental[]>;
    delete(id: string): Promise<void>;
    updateFinish(id: string,end_date: Date): Promise<void>;

}


export {IDressRentalRepository}