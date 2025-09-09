import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Projeto{
    @PrimaryGeneratedColumn()
    id:string;
    @Column({type: 'varchar',length: 255})
    nomeProjeto:string;
    @Column({type: 'varchar', length: 500})    
    descricaoProjeto:string;
    @Column({type: 'varchar', length: 255})
    autorProjeto:string;
    @Column({type: 'varchar', length: 255, default: "em_analise"})
    statusProjeto:string; 
}