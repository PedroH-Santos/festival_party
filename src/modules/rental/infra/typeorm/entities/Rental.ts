
import { Client } from '@modules/client/infra/typeorm/entities/Client';
import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { Transaction } from '@modules/transaction/infra/typeorm/entities/Transaction';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid';




@Entity("rentals")
class Rental { 
    @PrimaryColumn()
    id: string;
    @Column()
    value: Number;
    @Column()
    description: string;
    @Column()
    start_date: Date;
    @Column()
    end_date: Date;
    @Column()
    expected_delivery_date: Date;
    @Column()
    status: string;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column()
    product_id: string;
    @ManyToOne(() => Product)
    @JoinColumn({name: "product_id"})
    product: Product;
    @Column()
    user_id: string;
    @ManyToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User;
    @Column()
    client_id: string;
    @ManyToOne(() => Client)
    @JoinColumn({name: "client_id"})
    client: Client;
    @OneToMany(() => Transaction, transaction => transaction.rental)
    transactions: Transaction[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();

        }
    }
}



export { Rental }