
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { CategoryProduct } from './CategoryProduct';
import { ImageProduct } from './ImageProduct';



@Entity("products")
class Product {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @ManyToOne(() => CategoryProduct)
    @JoinColumn({name: "category_id"})
    category: CategoryProduct;
    @Column()
    category_id: string;
    @Column()
    price: number;
    @CreateDateColumn()
    created_at: Date; 
    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => ImageProduct, image => image.product)
    images: ImageProduct[];

    constructor(){ 
        if(!this.id){
            this.id = uuidv4();
        }
    }
} 

export {Product}

