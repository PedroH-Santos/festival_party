




interface ICreateRentalDTO {
    id?: string;
    expected_delivery_date: Date;
    value: Number;
    description?: string;
    product_id: string;
    user_id: string;
    start_date: Date;
    client_id: string;
    status: string;

}


export {ICreateRentalDTO}