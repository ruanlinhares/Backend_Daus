import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export abstract class usuario{

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    nomeUsuario:string;

    @Column()
    emailUsuario:string;

    @Column()
    senhaUsuario:string;

}