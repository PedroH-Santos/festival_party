import { ICreateAccessoryRentalDTO } from "../dtos/ICreateAccessoryRentalDTO";
import { AccessoryRental } from "../infra/typeorm/entities/AccessoryRental";






interface IAccessoryRentalRepository {
    create({id,value, expected_delivery_date, accessory_id, user_id,description,start_date,client_id}: ICreateAccessoryRentalDTO): Promise<AccessoryRental>;
    getByDate(accessory_id: string,start_date: Date): Promise<AccessoryRental[]>
    getAll(): Promise<AccessoryRental[]>;
    getById(id: string): Promise<AccessoryRental>;
    getByAccessoryId(accessory_id: string): Promise<AccessoryRental[]>;
    delete(id: string): Promise<void>;
    updateFinish(id: string,end_date: Date): Promise<void>;

}


export {IAccessoryRentalRepository}