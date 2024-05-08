import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

Entity()

export class Crud1 {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;
    @Column()
    cost : number;
    @Column({default:true})
    inStock : boolean;
}
