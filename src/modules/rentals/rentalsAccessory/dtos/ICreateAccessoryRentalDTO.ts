




interface ICreateAccessoryRentalDTO {
    id?: string;
    expected_delivery_date: Date;
    value: Number;
    description?: string;
    accessory_id: string;
    user_id: string;
    start_date: Date;
    client_id: string;

}


export {ICreateAccessoryRentalDTO}