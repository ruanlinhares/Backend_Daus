import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario{

    @PrimaryGeneratedColumn()
    id:string;
    @Column({type: 'varchar'})
    nomeUsuario:string;
    @Column({type: 'varchar', unique: true})
    emailUsuario:string;
    @Column({type: 'varchar'})
    senhaUsuario:string;
    @Column({type: 'varchar', default: 'user'})
    roleUsuario:string;

}