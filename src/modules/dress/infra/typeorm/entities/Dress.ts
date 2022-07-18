
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { CategoryDress } from './CategoryDress';
import { ImageDress } from './ImageDress';



@Entity("dress")
class Dress {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @ManyToOne(() => CategoryDress)
    @JoinColumn({name: "category_id"})
    category: CategoryDress;
    @Column()
    category_id: string;
    @Column()
    price: number;
    @CreateDateColumn()
    created_at: Date; 
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => ImageDress, image => image.dress)
    images: ImageDress[];

    constructor(){ 
        if(!this.id){
            this.id = uuidv4();
        }
    }
} 

export {Dress}

