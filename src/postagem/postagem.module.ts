﻿﻿import { Module } from "@nestjs/common";
import { Postagem } from "./entities/postagem.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemService } from "./services/postagem.service";
import { TemaModule } from "../tema/tema.module";
import { TemaService } from "../tema/services/tema.service";
import { PostagemController } from "./controller/postagem.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})

export class PostagemModule { }