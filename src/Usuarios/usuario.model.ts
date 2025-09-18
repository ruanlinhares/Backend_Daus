import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario{

    @PrimaryGeneratedColumn()
    id:string;
    @Column({type: 'varchar'})
    nomeUsuario:string;
    @Column({type: 'varchar'})
    emailUsuario:string;
    @Column({type: 'varchar'})
    senhaUsuario:string;
    @Column({type: 'varchar', default: 'common_user'})
    roleUsuario:string;

}