import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Projeto{
    @PrimaryGeneratedColumn()
    private id:string;
    @Column()
    private nomeProjeto:string;
    @Column()    
    private descricaoProjeto:string;
    @Column()
    private criadorProjeto:string; 
}