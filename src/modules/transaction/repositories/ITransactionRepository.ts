

interface ITransactionRepository{
    create({id,value,type,origin}: ICreateTransactionDTO): Promise<void>;
}


export {ITransactionRepository}