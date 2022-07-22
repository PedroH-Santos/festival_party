
import { User } from '@modules/user/infra/typeorm/entities/User';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid';




@Entity("accessory_rentals")
class AccessoryRental {
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
    accessory_id: string;
    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({name: "user_id"})
    user: User;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();

        }
    }
}



export { AccessoryRental }