
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { CategoryAccessory } from './CategoryAccessory';
import { ImageAccessory } from './ImageAccessory';



@Entity("accessory")
class Accessory {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    category_id: string;
    @ManyToOne(() => CategoryAccessory)
    @JoinColumn({name: "category_id"})
    category: CategoryAccessory;
    @Column()
    price: number;
    @CreateDateColumn()
    created_at: Date; 
    @UpdateDateColumn()
    updated_at: Date;
    @OneToMany(() => ImageAccessory, image => image.accessory)
    images: ImageAccessory[];
    constructor(){ 
        if(!this.id){
            this.id = uuidv4();
        }
    }
} 

export {Accessory}