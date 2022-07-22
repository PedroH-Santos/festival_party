
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Accessory } from './Accessory';


@Entity("accessory_images")
class ImageAccessory {
    @PrimaryColumn()
    id: string;
    @Column()
    image: string;
    @Column()
    accessory_id: string; 
    @ManyToOne(() => Accessory, dress => dress.images )
    @JoinColumn({name: "accessory_id"})
    accessory: Accessory;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export {ImageAccessory} 