import { Module } from "@nestjs/common";
import { Postagem } from "./postagem/entities/postagem.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemService } from "./postagem/services/postagem.service";
import { PostagemController } from "./postagem/controller/postagem.controller";
import { TemaModule } from "./tema/services/tema.module";
import { TemaService } from "./tema/services/tema.service";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})

export class PostagemModule { }