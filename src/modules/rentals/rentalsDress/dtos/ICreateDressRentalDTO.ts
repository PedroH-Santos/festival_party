




interface ICreateDressRentalDTO {
    id?: string;
    expected_delivery_date: Date;
    value: Number;
    description?: string;
    dress_id: string;
    user_id: string;
    start_date: Date;
    client_id: string;

}


export {ICreateDressRentalDTO}