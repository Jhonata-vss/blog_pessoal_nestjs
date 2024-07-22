import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"}) //Criando a tabela
export class Postagem{

    @PrimaryGeneratedColumn() //Chave primaria autoincremental
id: number;

@IsNotEmpty() //Nao aceitar o titulo vazio
@Column({length: 100, nullable: false}) //Definir o tamanho e nao aceitar o valor

titulo: string;
@IsNotEmpty()
@Column({length: 100, nullable: false})

texto: string;

@UpdateDateColumn() //A data e a hora serao preenchidas automaticamente
data: Date;

}