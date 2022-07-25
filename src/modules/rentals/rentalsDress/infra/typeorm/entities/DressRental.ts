
import { Client } from '@modules/client/infra/typeorm/entities/Client';
import { Dress } from '@modules/dress/infra/typeorm/entities/Dress';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid';




@Entity("dress_rentals")
class DressRental {
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
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    @Column()
    dress_id: string;
    @ManyToOne(() => Dress)
    @JoinColumn({name: "dress_id"})
    product: Dress;
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
    constructor() {
        if (!this.id) {
            this.id = uuidV4();

        }
    }
}



export { DressRental }