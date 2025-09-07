import { DataSource } from "typeorm";
import { Projeto } from "./Projetos/projeto.model";

export const conexaoBancoDeDados = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "",

    entities: [Projeto],

});